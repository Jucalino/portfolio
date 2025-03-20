export const fetchHygraphQuery = async (
    query: string,
    revalidate?: number
) => {
    const responde = await fetch(process.env.HYGRAPH_URL!, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`
        },
        body: JSON.stringify({ query }),
        next: {
            revalidate
        }
    })

    const { data } = await responde.json()
    return data
}