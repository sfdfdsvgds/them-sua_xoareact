import React from "react";
import { ProductTypes } from "./types/product";

type ProductManagerProps = {
    products: ProductTypes[],
    onXoa: (id: number)=>void
}

const ProductManager = (props: ProductManagerProps) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {props.products?.map((item, i)=>{
                    return <tr key={i}>
                        <th>{i + 1}</th>
                        <th>{item.name}</th>
                        <th>{item.price}</th>
                        <th>
                            <button onClick={()=> props.onXoa(item.id)}>Xóa</button>
                        </th>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ProductManager