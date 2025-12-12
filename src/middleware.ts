import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // EXCEÇÕES (não bloquear)
    if (
        pathname.startsWith("/api") ||
        pathname.startsWith("/_next") ||
        pathname.startsWith("/favicon") ||
        pathname.startsWith("/preview-login") // 👈 NECESSÁRIO
    ) {
        return NextResponse.next();
    }

    const isAuthenticated = request.cookies.get("preview_auth")?.value === "true";

    if (isAuthenticated) return NextResponse.next();

    // Redireciona para login
    const loginUrl = new URL("/preview-login", request.url);
    return NextResponse.redirect(loginUrl);
}

export const config = {
    matcher: ["/((?!.*\\.).*)", "/"],
};
