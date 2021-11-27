import React from "react";
import "./Home.css";
import Product from "./Product";
import bannerImage from "./resources/homePageBanner.jpg";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={bannerImage} alt=""/>
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                        rating={5}
                    />
                    <Product
                        id="49538094"
                        title="Kenwood Chef Titanium XL Kitchen Machine KVL8300S"
                        price={1329.00}
                        image='https://m.media-amazon.com/images/I/61i2thjkSJL._AC_SL1200_.jpg'
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="1911124124"
                        title='SAMSUNG LC32G75TQSEXXS Curved Gaming Monitor, 31.5", Black'
                        price={1349.00}
                        image='https://m.media-amazon.com/images/I/41cpZ1lyiUL._AC_.jpg'
                        rating={4}
                    />
                    <Product
                        id="71189234"
                        title='Apple Watch Series 7 (GPS + Cellular, 45mm) - Midnight Aluminium Case with Midnight Sport Band - Regular'
                        price={799.00}
                        image='https://m.media-amazon.com/images/I/71AO7bSOGYL._AC_SL1500_.jpg'
                        rating={5}
                    />
                    <Product
                        id="189132423432"
                        title='Kindle Paperwhite – Now Waterproof with 2x the Storage - 8 GB (International Version - previous generation - 2018 release)'
                        price={123.87}
                        image='https://m.media-amazon.com/images/I/51+TWOfdtiL._AC_SL1000_.jpg'
                        rating={3}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="324782864782"
                        title='Sonos One (Gen 2) - Voice Controlled Smart Speaker with Amazon Alexa Built-in - Black'
                        price={299.00}
                        image='https://m.media-amazon.com/images/I/71BCPUHy4fL._AC_SL1453_.jpg'
                        rating={2}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
