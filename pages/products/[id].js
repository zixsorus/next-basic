import Head from "next/head"
import Image from "next/image"
import style from "/styles/Detail.module.css"

export async function getStaticPaths() {
    const res = await fetch("https://dummyjson.com/products?limit=12")
    const data = await res.json()
    const paths = data.products.map((item) => {
        return {
            params: { id: String(item.id) }
        }
    })
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params }) {
    const id = params.id
    const res = await fetch("https://dummyjson.com/products/" + id)
    const data = await res.json()
    return {
        props: { products: data }
    }
}

export default function ProductDetail({ products }) {

    return (
        <>
            <Head>
                <title>{products.title}</title>
            </Head>
            <div className={style.container}>
                <div>
                    <Image src={products.thumbnail} width={500} height={300} alt={products.title} />
                </div>
                <div className={style.detail}>
                    <h1>{products.title}</h1>
                    <h2>$ {products.price}</h2>
                    <h2>{products.category}</h2>
                    <h3>{products.brand}</h3>
                    <h4>{products.description}</h4>
                    <h4>{products.rating}/5</h4>
                </div>
            </div>
        </>
    )
}