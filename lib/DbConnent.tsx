import { MongoClient, ServerApiVersion } from 'mongodb';


export const CollectionObj = {
    ProductCollection: "products",
    UserCollection: "users",
}

const uri:string = process.env.MONGODB_URI!
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export default async function DbConnent({collection}: {collection: string}) {
 try {
   if(!collection){
      throw new Error('Collection name is required');
    }
    if(!process.env.DB_NAME){
      throw new Error('DB_NAME is required');
    }
    await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const cachedDb = client.db(process.env.DB_NAME)
    const dbCollection = cachedDb.collection(collection);
    return dbCollection;
  } finally {
  console.error("Error connecting to MongoDB");;
  }

}
