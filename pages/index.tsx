import React from 'react'
import {NextPage} from "next"
import Link from 'next/link'
import Image from 'next/image'
import { connectToDatabase } from '../lib/mongoConnect'
import {ConhecimentoProps} from "../types"
import styles from '../styles/Home.module.css'
import Heading from '../components/Heading'


interface ConhecimentosProps {
conhecimentos: ConhecimentoProps[]
}

const Home:NextPage<ConhecimentosProps> = ({conhecimentos}) => {

  return (
  <div className={styles.container}>
      <Heading />

    <ul className={styles.main}>
    {
      conhecimentos.map((item) => {
        return (
        <li key={item.id}>
          <Link href={`/${item.id}`}>
          <Image src={item.image} alt={item.title} width={275.92} height={308} />
          </Link>
        </li>
        )
      })
    }
    </ul>

    </div>
  )
}

export async function getStaticProps(){

  const client = await connectToDatabase()

    const db = client.db("testDev")
    const detaisCollection = db.collection('documents');

    const  data = await detaisCollection.find({}).toArray()

  return {
    props: {
      conhecimentos: data?.map((item) => ({
        title: item.title,
        description: item.description,
        image: item.image,
        id: item._id.toString()
      }))
    }
  }
}

export default Home
