// src/app/api/preview-auth/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const { password } = body;

    // Senha secreta que só você e seu cliente devem saber
    const PREVIEW_PASSWORD = process.env.PREVIEW_PASSWORD || "minha-senha-secreta";

    if (password !== PREVIEW_PASSWORD) {
        return NextResponse.json({ success: false, message: "Senha incorreta" }, { status: 401 });
    }

    // Define cookie válido por 7 dias
    const response = NextResponse.json({ success: true });
    response.cookies.set("preview_auth", "true", {
        httpOnly: true,
        secure: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
    });

    return response;
}
