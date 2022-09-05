import {NextApiRequest, NextApiResponse} from "next"
 import { connectToDatabase } from "../../lib/mongoConnect";

export default async function Handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method === "POST"){
        let payload = req.body.payload.trim()
        console.log(payload)

        const client = await connectToDatabase()

        const db = client.db("testDev")
        const documents = db.collection('documents');

        let search = await documents.findOne({title: {$regex: new RegExp('^'+payload+'.*','i')}})
        
        // {$regex: new RegExp('^'+payload+'.*','i')}
        // search = search.slice(0,10);

        res.send({payload: search})
    }
}

