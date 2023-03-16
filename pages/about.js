import styles from '@/styles/About.module.css';
import Head from 'next/head';
import Image from 'next/image';

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name='Keyword' content='Web Shop'/>
            </Head>
          <div className={styles.container}>
            <h1 className={styles.title}>About</h1>
            <Image src="/about.svg" width={400} height={400} alt="logo" />
            
          </div>
        </>
      )
}