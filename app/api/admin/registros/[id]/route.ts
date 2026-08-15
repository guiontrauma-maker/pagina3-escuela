import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

const DATABASE_NAME = process.env.MONGODB_DB || "valtara";
const COLLECTION_NAME = "registros";

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "ID de registro no válido.",
        },
        { status: 400 }
      );
    }

    if (body.estado !== "recibido" && body.estado !== "papelera") {
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
      { _id: new ObjectId(id) },
      {
        $set: {
          estado: body.estado,
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Registro no encontrado.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        body.estado === "recibido"
          ? "Registro restaurado correctamente."
          : "Registro enviado a papelera correctamente.",
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

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "ID de registro no válido.",
        },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(DATABASE_NAME);

    const result = await db.collection(COLLECTION_NAME).deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Registro no encontrado.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Registro eliminado definitivamente.",
    });
  } catch (error) {
    console.error("Error al eliminar registro:", error);

    return NextResponse.json(
      {
        success: false,
        message: "No fue posible eliminar el registro.",
      },
      { status: 500 }
    );
  }
}