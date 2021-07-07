import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContextProvider'
import './Products.scss'
import ProductSpe from './ProductSpe'
export default function Products() {

    const context = useContext(ProductContext)

    const { id } = useParams()

    const products = context.productList.filter(item =>
        item.familyRecord === id
    )

    const product = products[0]
    console.log(product.modelList);
    return (
        <div className='product-container'>
            <h2>{product.fmyEngName}</h2>
            <section>
                {
                    product.modelList.map((item, index) => {
                        return <ProductSpe data={item} key={index} />
                    })
                }
            </section>
        </div>
    )
}
