import Layout from "../components/layout";
import Image from "next/image";

export default () => {
    let producers = [{
        title: "Notre fromage",
        description: "La Tomme des Croquants est un fromage à base de lait pasteurisé de vache au lait entier qui se présente sous forme nature traditionnelle et déclinée sous différentes méthodes d’affinages : c’est une pâte pressée souple et onctueuse, particulièrement fondante.",
        img: "/images/fromager.jpg"
    }, {
        title: "Notre viande",
        description: "Nous collaborons avec un fournisseur local. Il partage nos valeurs de respect, de qualité et d’authenticité. Nous le connaissons bien. Nous le rencontrons et les visitons régulièrement parce que nous sommes convaincus que la relation humaine et la confiance qui nous unissent sont indispensables.",
        img: "/images/eleveur.jpg"
    },
    ]
    return (
        <Layout>
            <article className="pv4 ph3 ph0-l">
                {producers.map((producer, index) => {
                    return (
                        <div key={index} className="flex flex-column flex-row-ns items-center">
                            <div
                                className={`w-100 w-60-ns pl4-ns pr3-ns ${index % 2 === 0 ? "order-2-ns" : "order-1-ns" +
                                    " order-2-ns"} order-1`}>
                                <h1 className="producerTitle">{producer.title}</h1>
                                <p className="producerDescription">
                                    {producer.description}
                                </p>
                            </div>
                            <div
                                className={`pl3-ns ${index % 2 === 0 ? "order-1-ns" : "order-2-ns flex justify-end"} order-2 mb4 mb0-ns w-100 w-40-ns`}>
                                <Image src={producer.img} width={541} height={361} alt={producer.title}/>
                            </div>
                        </div>
                    )
                })}
            </article>
        </Layout>
    )

}
