import { NextResponse } from "next/server";
import { getRecords } from "@/lib/records";

export async function GET() {
  try {
      const records = await getRecords();

          const data = records.map((record) => ({
                id: record._id?.toString(),
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