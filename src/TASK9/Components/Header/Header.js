import './Header.css'
import {Products} from '../Products/Products'
import {useDispatch, useSelector} from "react-redux";
import {clearCart, clearWishlist} from "../../src/redux";

export default function Header() {
    const {wishList} = useSelector(({products})=>products);
    const {cart} = useSelector(({products})=>products);
    const dispatch  = useDispatch();

    const wishlistTotalPrice = wishList.reduce((acc, value) => {
       return acc += value.price;
    },0);

    const cartTotalPrice = cart.reduce((acc, value) => {
        return acc += value.price;
    },0);


    return (
        <div>
            <header className={'header'}>
                <div className={'header-left'}>
                    <h1>Products</h1>
                </div>
                <div className={'header-right'}>
                    <h2 className={'header-right-one'} title={'Total sum: ' + wishlistTotalPrice + ' Euro'} onClick={()=>{
                        dispatch(clearWishlist());
                    }}>Wishlist {wishList.length}</h2>
                    <h2 title={'Total sum: '+ cartTotalPrice + ' Euro'} onClick={()=> {
                        dispatch(clearCart());
                    }}> Cart {cart.length}</h2>
                </div>
            </header>
            <Products/>
        </div>
    );
}