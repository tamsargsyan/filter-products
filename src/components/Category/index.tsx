import { useEffect, useState } from "react"
import { getData, DataProps } from "../../api"

// components 
import Card from "../Card"
import Loading from "../Loading"

// style
import "./index.css"

const Category = () => {
    const [data, setData] = useState([])
    const [filteredArr, setFilteredArr] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getData(setData)
        getData(setFilteredArr)
        setLoading(true)
    }, [])    

    const filterProduct = (categoryFrom: string) => {
        const result = data.filter((item: DataProps, i: number) => item.category === categoryFrom)
        setFilteredArr(result) 
    }

    return (
        <>
            <div className="category-wrapper">
                <button onClick={() => {
                    setFilteredArr(data)
                }}>All</button>
                <button onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                <button onClick={() => filterProduct("jewelery")}>Jewelery</button>
                <button onClick={() => filterProduct("electronics")}>Electroincs</button>
                <button onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
            </div>
            {loading ? <Card data={filteredArr}/> : <Loading />}
        </>
    )
}

export default Category