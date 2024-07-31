import React from 'react'
import './index.css'
import Browse from '../../browse'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer({ category }) {
    return (
        <div className='container-fuild footer z-1 '>
            <div className='row  pt-5 pb-5'>
                <ul className='col-sm-3'>
                    <ol className='fs-3 fw-bold pb-4'>Store Location</ol>
                    <ol className='fs-6 w-75'>
                        500 Terry Francine Street
                        San Francisco, CA 94158
                        info@mysite.com
                        123-456-7890</ol>
                    <FacebookIcon />
                    <LinkedInIcon />
                    <ol></ol>
                    <ol></ol>
                </ul>
                <div className='col-sm-3' id='display-footer'>
                    <p className='fs-3 fw-bold pb-4'>Shop</p>
                    <div className='lh-sm'>

                        {
                            category.map(item => {
                                return <Browse {...item} />

                            })}

                    </div>
                </div>
                <ul className='col-sm-3'>
                    <ol className='fs-3 fw-bold pb-4'>Customer Support</ol>
                    <ol><a href='#'> Contact Us</a></ol>
                    <ol><a href='#'> Help Center</a></ol>
                    <ol><a href='#'>About Us</a></ol>
                    <ol><a href='#'> Careers</a></ol>
                </ul>
                <ul className='col-sm-3'>
                    <ol className='fs-3 fw-bold pb-4 '>Policy</ol>
                    <ol><a href='#'>Shipping & Returns </a></ol>
                    <ol><a href='#'></a>Payment Methods </ol>
                    <ol><a href='#'></a>FAQ</ol>
                </ul>
            </div>
            <hr className='w-50 mx-auto text-center' />
            <div className='logo-pay pb-5 mx-auto text-center'>
                <div><p >We accept the following paying methods</p></div>
                <div className='row w-25 mx-auto text-center'>
                    <div className='col-sm-3 sizesvg' id='svg2'></div>
                    <div className='col-sm-3 sizesvg' id='svg1'></div>
                    <div className='col-sm-3 sizesvg' id='svg2'></div>
                    <div className='col-sm-3 sizesvg' id='svg3'></div>
                    <div className='col-sm-3 sizesvg' id='svg2'></div>
                    <div className='col-sm-3 sizesvg' id='svg4'></div>
                </div>
            </div>
        </div>

    )
}
