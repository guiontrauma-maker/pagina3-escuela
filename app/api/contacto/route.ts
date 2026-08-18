import { NextResponse } from "next/server";
import { createRecord } from "@/lib/records";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      countryCode,
      phone,
      currency,
      amount,
      caseType,
      description,
      privacy,
    } = body;

    if (
      !name ||
      !email ||
      !countryCode ||
      !phone ||
      !currency ||
      !amount ||
      !caseType ||
      !description ||
      !privacy
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Faltan datos obligatorios.",
        },
        { status: 400 },
      );
    }

    const id = await createRecord("contacto", {
      name,
      email,
      countryCode,
      phone,
      currency,
      amount,
      caseType,
      description,
      privacy,
    });

    return NextResponse.json({
      success: true,
      id: id.toString(),
    });
  } catch (error) {
    console.error("Error al guardar contacto:", error);

    return NextResponse.json(
      {
        success: false,
        message: "No fue posible guardar el contacto.",
      },
      { status: 500 },
    );
  }
}
