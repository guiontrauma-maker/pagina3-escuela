import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Falta la variable de entorno MONGODB_URI");
}

const options = {
  tls: true,
  replicaSet: "atlas-13d57s-shard-0",
  serverSelectionTimeoutMS: 10000,
};

const directUri = uri
  .replace(
    "mongodb+srv://",
    "mongodb://"
  )
  .replace(
    "cluster0.h9meueb.mongodb.net",
    [
      "ac-kocopx7-shard-00-00.h9meueb.mongodb.net:27017",
      "ac-kocopx7-shard-00-01.h9meueb.mongodb.net:27017",
      "ac-kocopx7-shard-00-02.h9meueb.mongodb.net:27017",
    ].join(",")
  );

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(directUri, options);
    global._mongoClientPromise = client.connect();
  }

  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(directUri, options);
  clientPromise = client.connect();
}

export default clientPromise;