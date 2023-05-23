import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });
    return new NextResponse(JSON.stringify(user), {
      status: 200,
      headers: {
        "content-type": "applications/json",
      },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "invalid credentials" }), {
      status: 409,
      headers: {
        "content-type": "applications/json",
      },
    });
  }
}
