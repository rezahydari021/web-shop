import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useParams } from 'react-router-dom';
import ProductContext from '../context/productContext';
import Card from '../card';
import AddRemove from '../Add&Removebutton';
export default function DetailsCard({ setAddCart, addCart }) {

    const { products } = useContext(ProductContext)
    const [cardDetails, setCardDetails] = useState([])
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then(res => res.json())
            .then(json => setCardDetails(json));
    }, [id]);

    const handleAddCart = (props) => {
        setAddCart((prevState) => {
            // const itemIndex = prevState.arrayCart.findIndex(cartItem => cartItem.id === props.id);
            const newarrayCart = [...prevState.arrayCart]
            const newCounter = [...prevState.Counter]
            let totalType = prevState.total
            let totalPrice = prevState.totalprice

            newCounter.push(1)
            newarrayCart.push(props)
            totalPrice += props.price


            totalType += 1

            return {
                arrayCart: newarrayCart,
                Counter: newCounter,
                total: totalType,
                totalprice: totalPrice
            }

        })
        console.log(addCart.arrayCart, 'qwwerr')
    }

    const [changeImage, setChangeImage] = useState(0)
    return (
        <div className='container-fluid mx-auto w-xxl-75 px-3'>

            {
                cardDetails && (
                    <>

                        <div ><a className='text-dark'>Home</a>{'>'}<Link to={`/products/${cardDetails.category?.id}`}><a className='text-dark'>{cardDetails.category?.name}</a></Link> {'>'}{cardDetails.title} </div>
                        <div>
                            <div className="card mb-3 p-3 " style={{ backgroundColor: '#ffffff00', border: 'none' }}>
                                <div className="row g-0">
                                    <div className="col-md-4 w-xxl-50 " >

                                        {cardDetails?.description &&
                                            <img src={cardDetails.images[changeImage]} className="img-fluid rounded-start z-0" />

                                        }
                                    </div>
                                    <div className='changeimg flex-column'>
                                        {
                                            cardDetails?.description &&
                                            <>
                                                <img src={cardDetails.images[0]} id={0 === changeImage && 'activeImage'} onClick={() => setChangeImage(0)} className="col-lg-2 col-1 img-fluid rounded-start" />
                                                <img src={cardDetails.images[1]} id={1 === changeImage && 'activeImage'} onClick={() => setChangeImage(1)} className="col-lg-2 col-1 img-fluid rounded-start" />
                                                <img src={cardDetails.images[2]} id={2 === changeImage && 'activeImage'} onClick={() => setChangeImage(2)} className="col-lg-2 col-1 img-fluid rounded-start" />
                                            </>
                                        }
                                    </div>
                                    <div className="col-md-8 w-xxl-50">
                                        <div className="card-body ">
                                            <h5 className="card-title fs-1 fw-bold">{cardDetails.title}</h5>
                                            <p className="card-text fs-3 text-secondary">${cardDetails.price}</p>
                                            <div className='box-button-deatilsCard mx-auto z-2'>

                                                {

                                                    addCart.arrayCart.findIndex(cartItem => cartItem.id === cardDetails.id) < 0
                                                        ?
                                                        <> <button className='mb-3 rounded-pill text-white z-2' id='bg-button-card' onClick={() => handleAddCart(cardDetails)}>Add to Cart</button><br /></>
                                                        :
                                                        <AddRemove setAddCart={setAddCart} addCart={addCart} cardDetails={cardDetails} />


                                                }
                                                <Link to={'/mycart'}> <button onClick={() => handleAddCart(cardDetails)} className='rounded-pill text-white z-2' id='bg-button-card-1'>Buy now</button></Link>
                                            </div>
                                            <div className='mt-5'>
                                                <Accordion defaultExpanded
                                                    sx={{
                                                        backgroundColor: '#ffffff00',
                                                    }}
                                                >
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1-content"
                                                        id="panel1-header"
                                                    >
                                                        <Typography>Product Info</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            {cardDetails?.description}
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion
                                                    sx={{
                                                        backgroundColor: '#ffffff00',
                                                    }}>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel2-content"
                                                        id="panel2-header"
                                                    >
                                                        <Typography>Return & Refund Policy</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            I'm a Return and Refund policy. I'm a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion
                                                    sx={{
                                                        backgroundColor: '#ffffff00',
                                                    }}>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel2-content"
                                                        id="panel2-header"
                                                    >
                                                        <Typography>Shopping info</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

            <div className='w-75 mx-auto text-center'>
                <p>No Reviews Yet
                    Share your thoughts. Be the first to leave a review
                </p>
                <button className='button-DeatlisCard'>Leave a review</button>
            </div>
            <div className='text-center mt-5' >
                <p className='fs-2 fw-bold'>You might also like</p>

                <div className='container-fluid overflow-scroll  g-5'>
                    <div className='d-flex justify-content-between height-media'>
                        {
                            products.map(product => {
                                return <Card key={product.id} {...product} />

                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
