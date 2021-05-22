import {SET_PRODUCTS,
    SET_PRODUCTS_LOADING,
    RESET_PRODUCTS_LOADING,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
    CLEAR_WISHLIST,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
} from "../ActionTypes";

const initialState = {
    products: [],
    wishList: [],
    cart: [],
    isLoading: false
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        case SET_PRODUCTS_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case RESET_PRODUCTS_LOADING: {
            return {
                ...state,
                isLoading: false
            }
        }
        case ADD_TO_WISHLIST: {
            const {payload} = action;
            const alreadyExists = state.wishList.find(({id}) => id === payload);
            if (alreadyExists){
                return state;
            }

            const itemProducts = state.products.find(el => el.id === payload);
            return {
                ...state,
                wishList: [...state.wishList, itemProducts]
            }
        }
        case REMOVE_FROM_WISHLIST: {
            const {payload} = action;
            const isMissing = !state.wishList.find(({id}) => id === payload);
            if (isMissing){
                return state;
            }
            return {
                ...state,
                wishList: state.wishList.filter(el => el.id !== payload)
            }
        }
        case CLEAR_WISHLIST: {
            return {
                ...state, wishList: []
            }
        }
        case ADD_TO_CART: {
            const {payload} = action;
            const alreadyExists = state.wishList.find(({id}) => id === payload);
            if (alreadyExists){
                return state;
            }

            const itemProducts = state.products.find(value => value.id === payload);
            return {
                ...state,
                cart: [...state.cart, itemProducts]
            }
        }
        case REMOVE_FROM_CART: {
            const {payload} = action;
            const isMissing = !state.wishList.find(({id}) => id === payload);
            if (isMissing){
                return state;
            }

            return {
                ...state,
                wishList: state.cart.filter(value => value.id !== payload)
            }
        }
        case CLEAR_CART: {
            return {
                ...state, cart: []
            }
        }

        default:
            return state;
    }
}