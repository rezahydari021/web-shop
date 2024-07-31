import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Browse(props) {
    return (
        <>
            {
                props.id <= 6 &&
                <Link  to={`/products/${props.id}`}><a className="nav-link text-dark">{props.name}</a></Link>
            }

        </>
    )
}
