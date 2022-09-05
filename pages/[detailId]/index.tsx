import React from 'react'
import { connectToDatabase } from '../../lib/mongoConnect'
import { ObjectId } from 'mongodb'

import Slider from '../../components/Slider'
import Heading from '../../components/Heading'

import styles from "../../styles/singlePage.module.css"

function DetailPage({detailData,dataSlider}) {

    return (
    <div className={styles.container}>
        <Heading />
        <Slider dataSlider={dataSlider} index={detailData.index}/>        
    </div>
  )
}

export async function getStaticProps (context){
    const detailId = context.params.detailId

    const client = await connectToDatabase()
    const db = client.db()
    const detaisCollection = db.collection('documents');

    const detailData = await detaisCollection.findOne({_id: ObjectId(detailId)})

    const  data = await detaisCollection.find({}).toArray()

    client.close()
    return {
        props: {
            detailData: {
                id: detailData._id.toString(),
                title: detailData.title,
                description: detailData.description,
                image: detailData.image,
                index: detailData.index
             },
             dataSlider: data.map((item) => ({
                title: item.title,
                description: item.description,
                image: item.image,
                id: item._id.toString(),
                index: item.index

              }))
            }
        }
    }


    export async function getStaticPaths(){
        const client = await connectToDatabase()
    
        const db = client.db("testDev")
        const collection = db.collection('documents');
    
        const  data = await collection.find({}, {_id: 1}).toArray()
    
        client.close()
    
        return {
            fallback: true,
            paths: data.map((item)=> ({
                params: {detailId: item._id.toString()}
            }))
        }
    }

export default DetailPage
