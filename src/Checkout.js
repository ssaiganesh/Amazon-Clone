import React from 'react';
import './Checkout.css'
import Subtotal from "./Subtotal";

function Checkout(props) {
    return (
        <div className="checkout">
            <div className={"checkout__left"}>
                <img
                    className="checkout__ad"
                    src="https://images-fe.ssl-images-amazon.com/images/G/65/SG-hq/2021/img/Associates_Mass_/XCM_Manual_1366489_1888671_4156723_SG_sg_bfcm21_egc_ii_sg_en_1500x120_en_SG.jpg"
                    alt=""
                />
                <div>
                    <h2 className={"checkout__title"}> Your Shopping Basket</h2>
                </div>
            </div>
            <div className={"checkout__right"}>
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;