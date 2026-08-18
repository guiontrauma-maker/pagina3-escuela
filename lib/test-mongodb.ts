import clientPromise from "./mongodb";

async function testMongoDB() {
  try {
      const client = await clientPromise;

          await client.db("admin").command({
                ping: 1,
                    });

                        console.log("✅ AER: conexión con MongoDB exitosa");
                          } catch (error) {
                              console.error("❌ AER: error de conexión con MongoDB");
                                  console.error(error);
                                    }
                                    }

                                    testMongoDB();