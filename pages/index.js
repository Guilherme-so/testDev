import Link from 'next/link'
import Image from 'next/image'
import { connectToDatabase } from '../lib/mongoConnect'

import styles from '../styles/Home.module.css'
import Heading from '../components/Heading'


const Home = ({conhecimento}) => {

  return (
  <div className={styles.container}>
      <Heading  data={conhecimento}/>
    <ul className={styles.main}>
    {
      conhecimento.map((item) => {
        return (
        <li key={item.id}>
          <Link href={`/${item.id}`}>
          <Image src={item.image} width={275.92} height={308} />
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
      conhecimento: data?.map((item) => ({
        title: item.title,
        description: item.description,
        image: item.image,
        id: item._id.toString()
      }))
    }
  }
}

export default Home
