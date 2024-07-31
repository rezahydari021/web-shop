import React from 'react'
import './index.css'
import { Button } from '@mui/material'
import Image1 from '../../../../img/1.webp'
import Image2 from '../../../../img/2.webp'
import Image3 from '../../../../img/3.webp'
export default function BG_Layer() {
    return (
        <>

            <div id="carouselExampleIndicators z-0" className="carousel slide " data-ride="carousel">
                <ol className="carousel-indicators ">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner ">
                    <div className='text'>
                        <div id='title_text_bglayer'  className='w-25'>Best Prices</div>
                        <div id='text-bglayer'> <h3>Incredible Prices on All Your Favorite Items</h3></div>
                        <div id='text-bglayer'> <p className='fs-5'>Get more for less on selected brands</p></div>

                        <div> <button class="button-bg-0">Shop Now</button> </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={Image1}  className="d-block w-100 size "  />
                    </div>
                    <div className="carousel-item">
                        <img src={Image2} className="d-block w-100 size"  />
                    </div>
                    <div className="carousel-item">
                        <img src={Image3} className="d-block w-100 size"  />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="sr-only"></span>
                </a>
            </div>
        </>
    )
}
