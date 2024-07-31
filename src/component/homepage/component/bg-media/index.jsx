import React from 'react'
import './index.css'
import { Button } from '@mui/material'
export default function BG_media(props) {

    return (
        <div>
            {
                props.id <= 7 &&

                <div class="card width-media" >
                    <img id='img-media' src={props.images[0]} class="card-img-top" alt="" />
                    <div class="card-body">
                        <p class="card-text fs-6">{props.title}</p>
                        <p class="card-text fs-4">{props.price}</p>
                    </div>
                </div>
            }
        </div>
    )
}
