import React from 'react'
import { ProductTypes } from './types/product'
import { useForm, SubmitHandler } from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

type ProductAddProps = {
    onAdd: (products: ProductTypes)=> void;
}
type FormInput = {
    name: String,
    price: number
}
const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState:{errors}} = useForm<FormInput>()
    const Navigate = useNavigate()
    const onSubmit: SubmitHandler<FormInput> = (data: ProductTypes)=>{
        props.onAdd(data);
        Navigate('/products')
    }
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name')}/>
        <input type="number" {...register('price')}/>
        <button>Add</button>
    </form>
  )
}

export default ProductAdd