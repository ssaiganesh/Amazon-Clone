import React, {useState} from 'react';
import './Checkout.css'
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className={"checkout__left"}>
                <img
                    className="checkout__ad"
                    src="https://images-fe.ssl-images-amazon.com/images/G/65/SG-hq/2021/img/Associates_Mass_/XCM_Manual_1366489_1888671_4156723_SG_sg_bfcm21_egc_ii_sg_en_1500x120_en_SG.jpg"
                    alt=""
                />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className={"checkout__title"}> Your Shopping Basket</h2>
                    { basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className={"checkout__right"}>
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;