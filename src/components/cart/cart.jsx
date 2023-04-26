import { useCallback, useContext, useRef } from "react";
import { CartContext } from "../../context/cart-context";
import useRazorPay from 'react-razorpay';

const Cart = () => {
    const {cartData} = useContext(CartContext);
    const total = useRef();
    const RazorPay = useRazorPay();
    const razorPayDisplay = useCallback(async (total) => {
        const options = {
            key: "rzp_test_di4e8o6HCAjnjw",
            amount: total * 100,
            currency: "INR",
            name: "gamesite",
            description: "Gaming Transaction",
            handler: (res) => {
                console.log(res);
            },
            prefill: {
                name: "vishnu",
                email: "vs@gmail.com",
                contact: "12346850945"
            },
            notes : {
                address: "Work Address"
            },
            theme: {
                color: "#3399cc"
            }
        }
        const rzp1 = new RazorPay(options);
        rzp1.open();
    }, [RazorPay])
    // total.current.price = 0;
    return (
        <>
        <section>
            <section>
                {cartData.map((cartItem) => {
                    return (
                        <article>
                            <image src="" alt=""/>
                            <article>{cartItem.title}</article>
                            <article>{cartItem.price}</article>
                            <button>Remove from Cart</button>
                        </article>
                    )
                })}
            </section>
            <section>
                <article>Billing Information</article>
                {cartData.map((cart) => {
                    // total.current.price = total.current.price + cart.price;
                    return <article>
                        <span>{cart.title}</span>
                        <span>{cart.price}</span>
                    </article>
                })}
                <article>Total: 3000</article>
                <button onClick={() => {razorPayDisplay(6000)}}>CheckOut</button>
            </section>
        </section>
        </>
    )
}

export default Cart;