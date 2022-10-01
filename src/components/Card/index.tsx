import { DataProps } from "../../api"

// stlye
import "./index.css"

const Card = (data: { data: DataProps[] }) => {

    return (
        <div className="card-wrapper">
            {
                data.data &&
                    data.data.map((product: DataProps, i: number) => {
                    return (
                        <div className="card" key={product.id + i}>
                            <div className="img-wrapper">
                                <img src={product.image} />
                            </div>
                            <div className="content">
                                <h4>{product.title}</h4>
                                <p>{product.description.slice(0, 30)}</p>
                                <h5>{product.price}$</h5>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card