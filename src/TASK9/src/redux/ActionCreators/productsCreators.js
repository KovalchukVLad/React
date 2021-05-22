import {
    SET_PRODUCTS,
    SET_PRODUCTS_LOADING,
    RESET_PRODUCTS_LOADING,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
    ADD_TO_CART,
    REMOVE_FROM_CART, CLEAR_WISHLIST, CLEAR_CART
} from '../ActionTypes'


 export const fetchProducts = (sortOptions)=> async (dispatch) => {
    try {
        dispatch(setProductsLoading());
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        data.sort((a,b) => {
            return a[sortOptions.field] - b[sortOptions.field]
        })
        dispatch(setProducts(data));
    } catch (e) {
        console.log(e);
    } finally {
        dispatch(resetProductsLoading())
    }
}

export const setProducts = (payload) =>({type: SET_PRODUCTS, payload});
export const setProductsLoading = () => ({type:SET_PRODUCTS_LOADING});
export const resetProductsLoading = () => ({type:RESET_PRODUCTS_LOADING});

export const addToWishList = (payload) => ({type:ADD_TO_WISHLIST, payload})
export const removeFromWishList = (payload) =>({type:REMOVE_FROM_WISHLIST, payload})
export const clearWishlist = () => ({type: CLEAR_WISHLIST});

export const addToCart = (payload) => ({type:ADD_TO_CART, payload})
export const removeFromCart = (payload) =>({type:REMOVE_FROM_CART, payload})
export const clearCart = () => ({type: CLEAR_CART});

