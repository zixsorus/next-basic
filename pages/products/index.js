import Head from "next/head";
import Image from "next/image";
import style from '@/styles/Products.module.css';
import Link from "next/link";

// https://dummyjson.com/products?limit=12

export async function getStaticProps() {
    const res = await fetch("https://dummyjson.com/products?limit=16")
    const data = await res.json()
    return {
        props: { products: data.products }
    }
}


export default function Index({ products }) {
    return (
        <>
            <Head>
                <title>Products</title>
                <meta name='Keyword' content='Web Shop' />
            </Head>
            <div className={style.container}>
                <div className={style.flexcontainer}>
                    {products.map(item => (
                        <div key={item.id}>
                            <Link href={'/products/' + item.id}>
                                <Image src={item.thumbnail} width={300} height={200} alt={item.title} />
                                <h2 className={style.title}>{item.title}</h2>
                                <h2>${item.price}</h2>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}