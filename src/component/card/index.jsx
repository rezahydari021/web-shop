import React, { useContext, useEffect, useRef, useState } from 'react';
import ProductContext from '../context/productContext';
import { useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material';

export default function Card(props) {
  const navigate = useNavigate()
  const handleclick = (productId) => [
    navigate(`/product/${productId}`)
  ]
  const [isHover, setIsHover] = useState(false)
  const handlehover = (props) => {
    setIsHover(props)
  }
  const randomNumber = useRef( Math.floor(Math.random() * 5) + 1);
  return (
    <div className="card col-10 col-sm-5 m-3 col-lg-3 p-2 g-3" id='time' onMouseEnter={() => handlehover(false)} onMouseLeave={() => handlehover(true)} onClick={() => handleclick(props.id)}>
      {
        isHover ?
          <img className="card-img-top" src={props.images[0]} />
          :
          <img className="card-img-top" src={props.images[1]} />
      }

      <div className="card-body">
        <p className="card-text fs-6">{props.title}</p>
        <p className="card-text fs-4">${props.price}</p>
      </div>
      <div><Rating name="disabled" value={randomNumber.current} readOnly sx={{ color: '#751fff' }} /></div>
    </div>

  );
}
