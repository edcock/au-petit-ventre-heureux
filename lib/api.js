import {GraphQLClient} from "graphql-request";

export function request({query, variables, preview}) {
    const endpoint = preview
        ? `https://graphql.datocms.com/preview`
        : `https://graphql.datocms.com/`;
    const client = new GraphQLClient(endpoint, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer 16944c95ef531d96f712c362d38876`
        }
    });
    return client.request(query, variables);
}

export async function getAllDailyDishes() {
    const data = await request({
        query: `query MyQuery {
                  allDailyDishes(filter: {active: {eq: true}}) {
                    id
                    name
                    description
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
    })
    return data?.allDailyDishes
}
