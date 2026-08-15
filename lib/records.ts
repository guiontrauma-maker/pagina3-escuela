import clientPromise from "./mongodb";

export type RecordType = "contacto" | "caso";

export type RecordStatus = "recibido" | "papelera";

export interface ValtaraRecord {
  _id?: string;
    tipo: RecordType;
      datos: Record<string, unknown>;
        recibidoEn: Date;
          estado: RecordStatus;
          }

          const DATABASE_NAME = process.env.MONGODB_DB || "valtara";
          const COLLECTION_NAME = "registros";

          export async function getRecords() {
            const client = await clientPromise;

              const db = client.db(DATABASE_NAME);

                return db
                    .collection<ValtaraRecord>(COLLECTION_NAME)
                        .find({ estado: "recibido" })
                            .sort({ recibidoEn: -1 })
                                .toArray();
                                }

                                export async function getTrashRecords() {
                                  const client = await clientPromise;

                                    const db = client.db(DATABASE_NAME);

                                      return db
                                          .collection<ValtaraRecord>(COLLECTION_NAME)
                                              .find({ estado: "papelera" })
                                                  .sort({ recibidoEn: -1 })
                                                      .toArray();
                                                      }

                                                      export async function createRecord(
                                                        tipo: RecordType,
                                                          datos: Record<string, unknown>
                                                          ) {
                                                            const client = await clientPromise;

                                                              const db = client.db(DATABASE_NAME);

                                                                const nuevoRegistro: ValtaraRecord = {
                                                                    tipo,
                                                                        datos,
                                                                            recibidoEn: new Date(),
                                                                                estado: "recibido",
                                                                                  };

                                                                                    const result = await db
                                                                                        .collection<ValtaraRecord>(COLLECTION_NAME)
                                                                                            .insertOne(nuevoRegistro);

                                                                                              return result.insertedId;
                                                                                              }