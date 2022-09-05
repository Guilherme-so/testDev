import { connectToDatabase } from "../../lib/mongoConnect"
import { data } from "../../data"

//essa rota e so para jogar os dados no banco de dados 

 export default async function Handler(req, res){


    // const client = await connectToDatabase()

    // const db = client.db("testDev")
    // const collection = db.collection('documents');

    // collection.drop();

    // collection.insertMany(data)

    
    res.status(200).json({msg: "Dados adicionado ao banco de dados com successo"})
}
