import React, { useContext } from 'react'
import BG_Layer from './component/bg-layer'
import BG_Layer_1 from './component/bg-layer-1'
import Box from './component/box'
import Card from '../card'
import BG_Layer_3 from './component/bg-layer-3'
import Category from './component/category'
import '../../App.css'
import { useNavigate } from 'react-router-dom'
import ProductContext from '../context/productContext'
import Brands from './component/brand'
export default function Homepage({ category }) {
  const { products } = useContext(ProductContext)
  const navigate = useNavigate();
  const handleAddressApl = (props) => {
    navigate(`products/${props}`)
  }
  return (
    <div>
      <BG_Layer />
      <BG_Layer_1/>
      <Box />
      <div className='container-fluid text-center' >
        <div className='fs-2 fw-bold pt-4' > <p>Best Sellers</p></div>
        <div className='container-fluid overflow-scroll  g-5'>
          <div className='d-flex justify-content-between height-media'>
            {
              products.map(product => {
                return product.id <= 50 &&
                  <Card key={product.id} {...product} />

              })
            }
          </div>
        </div>
        <div className='w-100   ' id='button-media-bg'><button onClick={() => handleAddressApl(1)}>View All</button></div>
      </div>
      <BG_Layer_3
        title={'Save up to'}
        price={'150$'}
        description={'on selected laptop & tablets brands'}
        text={'Terms and conditions apply'}
        box={true}
        idStyle={'image1'}
      />
      <div className='container-fluid heights d-flex text-center fs-4 fw-bold  ' >
        {
          category.map(item => {
            if (item.id < 6) {
              return <Category {...item} />
            }
          })
        }
      </div>
      <div className='container-fluid text-center' >
        <div className='fs-2 fw-bold pt-4' > <p>Best Sellers</p></div>
        <div className='container-fluid overflow-scroll  g-5'>
          <div className='d-flex justify-content-between height-media'>
            {
              products.map(product => {
                return product.id >= 35 &&
                  <Card key={product.id} {...product} />

              })
            }
          </div>
        </div>
        <div className='w-100  mt-5 ' id='button-media-bg'><button onClick={() => handleAddressApl(4)}>View All</button></div>
      </div>
      <BG_Layer_3
        title={'Best Arial View in Town'}
        price={'30% OFF'}
        description={'on professional camera drones'}
        text={'Limited quantities.See product detail pages for availability.'}
        box={false}
        idStyle={'image2'}
      />
      <Brands />
    </div>
  )
}
