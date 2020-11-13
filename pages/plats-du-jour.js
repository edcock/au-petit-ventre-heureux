import Layout from "../components/layout";
import Image from "next/image";
import {getAllDailyDishes} from "../lib/api";

export default ({allDailyDishes}) => {
    return (
        <Layout>
            <article className="pv4 ph0-l">
                <div className='daily-intro'>
                    Le Petit Ventre Heureux à fait le choix de favoriser les <span className="highlights">fournisseurs locaux et les filières courtes </span>
                    afin de garantir la fraîcheur des produits cuisinés.
                    <h2 className='daily-mobile-title'>Notre selection du jour</h2>
                </div>
                {allDailyDishes.map((dailyDish, index) => {
                    return (
                        <div className="daily-container flex flex-column flex-row-ns items-center">
                            <div
                                className={`w-100 pl4-ns pr3-ns w-60-ns ${index % 2 === 0 ? "order-2-ns" : "order-1-ns" + " order-2-ns"} order-1`}>
                                <h1 className="daily-dish-title">{dailyDish.name}</h1>
                                <p className="daily-description">
                                    {dailyDish.description}
                                </p>
                            </div>
                            <div
                                className={`${index % 2 === 0 ? "order-1-ns" : "order-2-ns flex justify-end"} order-2 mb3 mb0-ns w-90 w-40-ns`}>
                                <Image src={dailyDish.picture.url}
                                       width={dailyDish.picture.width}
                                       height={dailyDish.picture.height}
                                       alt={dailyDish.picture.alt}/>
                            </div>
                        </div>
                    )
                })}
                <div className="flex flex-column flex-row-ns items-center">
                    <div
                        className={`w-100 w-60-ns order-2-ns order-1`}>
                        <h1 className="daily-title">Notre Chef</h1>
                        <p className="chef-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean praesent non egestas varius
                            dictum condimentum quis elementum
                        </p>
                    </div>
                    <div
                        className={`order-2-ns flex justify-end order-2 mb4 mb0-ns w-90 w-50-ns`}>
                        <Image src={"/images/photo-chef.jpg"} width={541} height={361} alt="Notre Chef "/>
                    </div>
                </div>
            </article>
        </Layout>
    )

}

export async function getStaticProps() {
    const allDailyDishes = await getAllDailyDishes()
    return {
        props: allDailyDishes
    };
}
