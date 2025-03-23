import React, { useReducer, useState } from 'react'
import ProductContext from './ProductContext'
import ProductReducer from './ProductReducer'
import axiosClient from '../../config/axios'

const ProductState = (props) => {
    const initialState = {
        products: []
    }
    const [ loading, setLoading ] = useState(true)
    const [globalState, dispatch] = useReducer(ProductReducer, initialState);
    const getProducts = async () => {
        try {
            const res = await axiosClient.get('/products/all-products');
            dispatch({
                type: 'OBTENER_PRODUCTOS',
                payload: res.data.products
            });
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    const getProductById = async (id) => {
        try {
          const res = await axiosClient.get(`/products/product/${id}`)
          dispatch({
            type: "OBTENER_PRODUCTO_POR_ID",
            payload: res.data.product
          })
          setLoading(false)
        }
        catch (error) {
          console.log(error)
            setLoading(false)
        }
    }
    return (
        <ProductContext.Provider
            value={{
                products: globalState.products,
                singleProduct: globalState.singleProduct,
                loading: loading,
                getProducts,
                getProductById
            }}>
            { props.children }            
        </ProductContext.Provider>
    )
}
export default ProductState