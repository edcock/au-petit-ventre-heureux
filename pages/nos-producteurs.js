import Layout from "../components/layout";
import Image from "next/image";
import {request} from "../lib/datocms";

export async function getServerSideProps() {
    let ALL_PRODUCERS = `{ allProducers(filter: {active: {eq: true}}, orderBy: _createdAt_ASC) {
        id
        name
        picture {
            alt
            id
            height
            width
            url
            title
        }
        description
        }}`

    const data = await request({
        query: ALL_PRODUCERS,
    });
    return {
        props: {data}
    };
}

export default function NosProducteurs({data}) {
    return (
        <Layout>
            <article className="producers-container">
                {data?.allProducers.map((producer, index) => {
                    return (
                        <div key={index} className="flex flex-column flex-row-ns items-center mv4-ns">
                            <div
                                className={`w-100 w-60-ns pl4-ns pr3-ns ${index % 2 === 0 ? "order-2-ns" : "order-1-ns" +
                                    " order-2-ns"} order-1`}>
                                <h1 className="producerTitle">{producer.name}</h1>
                                <p className="producerDescription">
                                    {producer.description}
                                </p>
                            </div>
                            <div
                                className={`${index % 2 === 0 ? "order-1-ns" : "order-2-ns flex justify-end"} order-2 mb4 mb0-ns w-100 w-40-ns`}>
                                <Image src={producer.picture.url} width={producer.picture.width}
                                       height={producer.picture.height} alt={producer.picture.alt}
                                />
                            </div>
                        </div>
                    )
                })}
            </article>
        </Layout>
    )
}
