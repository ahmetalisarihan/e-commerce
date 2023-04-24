import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/productSlice'
import { RootState } from '../../redux/store'
import Loading from '../Loading'
import Product from './Product'
import IProduct from "../../types/productTypes";

const Products: React.FC<IProduct> = () => {
  const dispatch = useDispatch<any>()
  const {products, productsStatus} = useSelector((state: RootState) => state.products)
  console.log(products, "products")

  useEffect(()=> {
    dispatch(getProducts())
  },[dispatch])
  return (
    <div>
      {productsStatus == "loading" ? <Loading /> :
      <div>
        {products?.map((product:string,i:number)=>(
          <Product key={i} product ={product}/>
        ))}
      </div> }
    </div>
  )
}

export default Products