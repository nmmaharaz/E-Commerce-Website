import DbConnent, { CollectionObj } from "@/lib/DbConnent";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    const body = await req.json();
    console.log("Request body:", body);

    try{
        const productCollection = await DbConnent({ collection: CollectionObj.ProductCollection })
        const result = await productCollection.insertOne({name: "product"})
        return NextResponse.json(result)
        
    }catch(error){
        console.error("Error in product route:", error);
        return NextResponse.json({ error: "Internal Server Error" }, {status: 500});
    }
}