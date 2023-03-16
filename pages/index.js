import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keyword" content='Web Shop' />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Home</h1>
        <Image src="/shopping.svg" width={400} height={400} alt="image" />
        <p>Welcome to Web Shop</p>
        <Link className={styles.btn} href="/products">All Products</Link>
      </div>
    </>
  )
}
