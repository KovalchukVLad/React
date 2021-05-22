import {useEffect} from "react";
import {addToWishList, removeFromWishList, addToCart, removeFromCart, fetchProducts} from '../../src/redux'
import {useDispatch, useSelector} from "react-redux";
import './Products.css'

const desc = (value) => {
    let a = document.getElementById('desc' + value.id);
    if (a.style.display !== 'none') {
        a.style.display = 'none';
        a.style.fontSize = '20px';
    } else {
        a.style.display = 'block';
    }
}

export const Products = () => {
    const {wishList} = useSelector(({products}) => products);
    const {cart} = useSelector(({products}) => products);

    const {products, isLoading} = useSelector(({products, isLoading}) => products)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchProducts({
            field: 'price'
        }));
    }, [])

    if (isLoading) {
        return (
            <div>DATA LOADING!!!</div>
        )
    }
    const isInWishList = (wishist, id) => !!wishist.find(el => el.id === id);
    const isInCart = (cart, id) => !!cart.find(el => el.id === id);

    return (
        <div className={'main'}>
            {
                products.map(product => (

                    <div key={product.id} className={'items'}>
                        <div className={'items_text'}>
                            <div className={'title'}>
                                {product.title}
                            </div>
                            <div className={'price'}>
                                <div>Price:</div>
                                <div>{product.price}</div>
                            </div>
                        </div>
                        <img className={'imag'} src={product.image} alt="products"/>
                        <div className={'buttons'}>
                            <button className={'desription_button'} onClick={() => {
                                isInCart(cart, product.id)
                                    ? dispatch(removeFromCart(product.id))
                                    : dispatch(addToCart(product.id))
                            }}>
                                {isInCart(cart, product.id) ? 'UNDO ' : 'Add to Cart'}
                            </button>

                            <button className={'desription_button'} onClick={() => desc(product)}>Description</button>

                            <button className={'desription_button'} onClick={() => {
                                isInWishList(wishList, product.id)
                                    ? dispatch(removeFromWishList(product.id))
                                    : dispatch(addToWishList(product.id))
                            }}>
                                {isInWishList(wishList, product.id) ? 'UNDO ' : 'Add to WishList'}
                            </button>
                        </div>
                        <p style={{display: 'none', fontSize: '20px'}}
                           id={'desc' + product.id}>{product.description}</p>
                    </div>

                ))
            }
        </div>
    );
}