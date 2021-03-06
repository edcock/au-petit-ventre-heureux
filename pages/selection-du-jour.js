import Layout from "../components/layout";
import React from "react";
import {request} from "../lib/datocms";
import {renderPriceWithSpaces} from "../lib/helper-price";

export async function getServerSideProps() {
    const SELECTION_DU_JOUR_QUERY = `{ allDailyDishes(filter: {active: {eq: true}}) { id
    price
    appetizer
    drink
    name
    mainCourse
    starter
    dessert
    secondMainCourse
    secondStarter
    secondDessert
    active
    picture {
      width
      url
      title
      height
      alt
    }
  }
}`
    const data = await request({
        query: SELECTION_DU_JOUR_QUERY,
    });
    return {
        props: {data}
    };
}

export default function SelectionDuJour({data}) {
    return (
        <Layout pageTitle={"Nos Menus du jours"}>
            <div className="dishes-container">
                <div className="flex flex-row-ns flex-column flex-wrap items-start mv5">
                    {data?.allDailyDishes.map((dailyDish, index) => {
                        return (
                            <div key={dailyDish.id}
                                 className="daily-container flex flex-column items-center">
                                <div className="w-100 w-50-ns order-2 h-100 flex flex-column justify-around mt4">
                                    <h1 className="daily-dish-title">
                                        {dailyDish.name} - {renderPriceWithSpaces(dailyDish.price)}
                                    </h1>
                                    {dailyDish.appetizer && (<div className="daily-starter">
                                        <p>{dailyDish.appetizer}</p>
                                    </div>)
                                    }
                                    <div className="daily-starter">
                                        <p>{dailyDish.starter}</p>
                                        {dailyDish.secondStarter
                                        && (<>
                                            <span>ou</span>
                                            <p>{dailyDish.secondStarter}</p>
                                        </>)}
                                    </div>
                                    <div className="daily-main-course">
                                        <p>{dailyDish.mainCourse}</p>
                                        {dailyDish.secondMainCourse &&
                                        <>
                                            <span>ou</span>
                                            <p>{dailyDish.secondMainCourse}</p>
                                        </>
                                        }
                                    </div>
                                    <div className="daily-dessert">
                                        <p>{dailyDish.dessert}</p>
                                        {dailyDish.secondDessert &&
                                        <>
                                            <span>ou</span>
                                            <p>{dailyDish.secondDessert}</p>
                                        </>
                                        }
                                    </div>
                                    {dailyDish.drink && (<div className="daily-drink">
                                        <p>{dailyDish.drink}</p>
                                    </div>)}
                                </div>
                                <div className="mb3 mb0-ns w-100 w-50-ns order-1 pa6 cover br3"
                                     style={{background: `url(${dailyDish.picture.url})`}}>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}
