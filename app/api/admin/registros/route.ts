
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

const DATABASE_NAME = process.env.MONGODB_DB || "valtara";
const COLLECTION_NAME = "registros";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const estado = searchParams.get("estado");

    const client = await clientPromise;
    const db = client.db(DATABASE_NAME);

    const filtro =
      estado === "papelera"
        ? { estado: "papelera" }
        : { estado: "recibido" };

    const records = await db
      .collection(COLLECTION_NAME)
      .find(filtro)
      .sort({ recibidoEn: -1 })
      .toArray();

    const data = records.map((record) => ({
      id: record._id.toString(),
      tipo: record.tipo,
      datos: record.datos,
      recibidoEn: record.recibidoEn,
      estado: record.estado,
    }));

    return NextResponse.json({
      success: true,
      records: data,
    });
  } catch (error) {
    console.error("Error al obtener registros:", error);

    return NextResponse.json(
      {
        success: false,
        message: "No fue posible obtener los registros.",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.tipo !== "caso") {
      return NextResponse.json(
        {
          success: false,
          message: "Tipo de registro no válido.",
        },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(DATABASE_NAME);

    const registro = {
      tipo: "caso",
      datos: body.datos,
      recibidoEn: new Date(),
      estado: "recibido",
    };

    const result = await db
      .collection(COLLECTION_NAME)
      .insertOne(registro);

    return NextResponse.json({
      success: true,
      id: result.insertedId.toString(),
      message: "Caso registrado correctamente.",
    });
  } catch (error) {
    console.error("Error al registrar caso:", error);

    return NextResponse.json(
      {
        success: false,
        message: "No fue posible registrar el caso.",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();

    const { id, estado } = body;

    if (!id || !estado) {
      return NextResponse.json(
        {
          success: false,
          message: "Faltan datos para actualizar el registro.",
        },
        { status: 400 }
      );
    }

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "El identificador del registro no es válido.",
        },
        { status: 400 }
      );
    }

    if (estado !== "papelera" && estado !== "recibido") {
      return NextResponse.json(
        {
          success: false,
          message: "Estado no válido.",
        },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(DATABASE_NAME);

    const result = await db.collection(COLLECTION_NAME).updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          estado,
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "No se encontró el registro.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        estado === "papelera"
          ? "Registro enviado a papelera correctamente."
          : "Registro restaurado correctamente.",
    });
  } catch (error) {
    console.error("Error al actualizar registro:", error);

    return NextResponse.json(
      {
        success: false,
        message: "No fue posible actualizar el registro.",
      },
      { status: 500 }
    );
  }
}

