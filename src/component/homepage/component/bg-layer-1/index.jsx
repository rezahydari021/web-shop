import React from 'react'
import './index.css'
import Image1 from '../../../../img/music.webp'
import Image2 from '../../../../img/4475.jpg'
import { useNavigate } from 'react-router-dom'
export default function BG_Layer_1() {
    const navigate = useNavigate();
    const handleAddressApi = (id) => {
        navigate(`products/${id}`)
    }

    return (
        <div className=' justify-content-around mt-5 w-100 display-layer' >
            <div className="card bg-dark text-white height" onClick={() => handleAddressApi(1)}>
                <img src={Image2} className="card-img" alt="" />
                <div className="card-img-overlay text-layer-2">
                    <p className="card-text">Holiday Deals</p>
                    <h3 className="card-title">Up to 30% off</h3>
                    <p className="card-text">Selected clothing brands</p>
                </div>
            </div>
            <div className="card bg-dark text-white height" onClick={() => handleAddressApi(2)}>
                <img src={Image1} className="card-img" alt="" />
                <div className="card-img-overlay text-layer-2">
                    <p className="card-text">Just In</p>
                    <h3 className="card-title">  Take Your Sound Anywhere</h3>
                    <p className="card-text">Top Headphone Brands</p>
                </div>
            </div>
        </div>
    )
}
