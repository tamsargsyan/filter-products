const BaseURL = "https://fakestoreapi.com/products"

export interface DataProps {
    category: string
    description: string
    id: number
    image: string
    price: string
    rating: {
        rate: number
        count: number
    }
    title: string
}

export const getData = (setData: React.Dispatch<React.SetStateAction<never[]>>) => {
    fetch(BaseURL)
    .then(resp => resp.json())
    .then(resp => setData(resp))
}