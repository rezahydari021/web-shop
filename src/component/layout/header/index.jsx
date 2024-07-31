import React, { useContext, useRef, useState } from 'react'
import './index.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ClearIcon from '@mui/icons-material/Clear';
import { Link, useNavigate } from 'react-router-dom';
import Browse from '../../browse';
export default function Header({ category, addCart, name, setHasActiveLogin }) {
    const navigate = useNavigate()
    const [search, setSearch] = useState({
        searchArray: [],
        isSearch: false
    })
    const inputSearchRef = useRef();
    const handleSearch = () => {
        const value = inputSearchRef.current.value
        if (value === '') {
            setSearch((prevState) => ({
                ...prevState,
                isSearch: false
            }))
        } else {
            setSearch((prevState) => ({
                ...prevState,
                isSearch: true
            }))
        }

        fetch(`https://api.escuelajs.co/api/v1/products/?title=${value}`)
            .then(res => res.json())
            .then(json => setSearch((prevState) => ({
                ...prevState,
                searchArray: json,

            })));

    }
    const [width, setWidth] = useState(null)
    const handleChangeWidth = () => {
        setWidth('widthProfile')
    }
    setTimeout(handleChangeWidth, 4000)
    return (
        <>
            <div className='conatainer-fuild bg-dark d-flex justify-content-between px-2 pt-2 pb-2'>
                <div className='text-light d-flex'>
                    <svg preserveAspectRatio="xMidYMid meet" data-bbox="22 29.01 158 141.964" viewBox="22 29.01 158 141.964" height="32" width="32" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs><style>#comp-km3c06wy svg [data-color="1"] fill: #ffffff;
                        #comp-km3c06wy svg data-color="2" fill: #751FFF;</style></defs>
                        <g>
                            <path d="M180 57.344c0-15.623-12.711-28.334-28.334-28.334-15.583 0-28.265 12.646-28.33 28.214L88.453 42.025a2.773 2.773 0 0 0-2.297.035L58.541 55.089a2.779 2.779 0 0 0-1.113.525L23.594 71.578c-.071.033-.13.08-.197.118-.039.022-.082.033-.12.057-.039.025-.073.055-.111.081a2.79 2.79 0 0 0-.441.386c-.02.022-.036.045-.055.067a2.736 2.736 0 0 0-.241.328c-.019.03-.039.059-.056.089a2.797 2.797 0 0 0-.197.418c-.011.029-.019.059-.029.089a2.816 2.816 0 0 0-.101.397c-.005.029-.013.058-.017.088a3.092 3.092 0 0 0-.029.397v65.903c0 1.088.635 2.076 1.624 2.529l61.681 28.197.015.005a2.692 2.692 0 0 0 .628.192c.161.03.324.051.488.052.008 0 .016.003.023.003.19 0 .378-.026.562-.065l.113-.024c.179-.045.354-.106.521-.186.011-.005.024-.007.035-.013l62.562-30.841a2.78 2.78 0 0 0 1.551-2.494V85.674C167.363 85.599 180 72.921 180 57.344zm-92.612-9.717l36.648 15.968a28.307 28.307 0 0 0 7.311 13.467l-13.602 6.705-52.128-25.868 21.771-10.272zm-.972 51.584L31.381 74.052l27.825-13.128 52.266 25.936-25.056 12.351zm-58.855-20.79l56.12 25.655v59.788l-56.12-25.654V78.421zm61.681 85.3v-59.703l26.088-12.86 2.287 25.914a2.78 2.78 0 1 0 5.538-.489l-2.476-28.062 15.349-7.566a28.177 28.177 0 0 0 10.215 4.196v50.472l-57.001 28.098zm62.424-83.604c-12.557 0-22.773-10.216-22.773-22.773s10.216-22.773 22.773-22.773 22.773 10.216 22.773 22.773c0 12.556-10.216 22.773-22.773 22.773z" fill="#000000" data-color="1"></path>
                            <path d="M147.434 68.5h-.041a2.778 2.778 0 0 1-1.956-.846l-7.506-7.747a2.781 2.781 0 0 1 3.994-3.87l5.568 5.746 13.928-13.551a2.781 2.781 0 0 1 3.878 3.986l-15.925 15.494a2.781 2.781 0 0 1-1.94.788z" fill="#621FCC" data-color="2"></path>
                        </g>
                    </svg>
                    <p>Free shipping on orders over $50</p>
                </div>
                <div>
                    <Link to={'/'}>  <a className='text-light text-decoration-none ' href=''> Home</a></Link>
                    <a className='text-light text-decoration-none mx-4' href=''> About us</a>
                    <a className='text-light text-decoration-none ' href=''>Call us 123-456789 </a>
                </div>
            </div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light pt-3 pb-3 mx-2 border-0">
                <Link to={'/'}><a className="navbar-brand fw-bold fs-1 text-decoration-none" href="#">TechShed</a></Link>
                <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                {/* Shearch */}
                <div class="search mt-2 mx-auto">
                    <input onChange={handleSearch} type="text" ref={inputSearchRef} />
                    <button>
                        <SearchIcon />
                    </button>
                    {/* result search */}
                    {search.isSearch ?
                        <div className='container-fuild position-absolute  bg-dark w-25 overflow-scroll' id='searchrender'>
                            {
                                search.searchArray.map(item => {
                                    return <div onClick={() => { navigate(`product/${item.id}`) }} class="card mb-3 mt-2 mx-auto z-3" id='showCart'>
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <img src={item.images[0]} class="img-fluid rounded-start mx-2 mt-2  " />
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title">{item.title}</h5>
                                                    <p class="card-text">${item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div> :
                        ''
                    }
                </div>
                <div class="collapse navbar-collapse d-lg-flex justify-content-end " id="navbarSupportedContent">
                    <form class="form-inline d-lg-flex align-items-center my-2 my-lg-0 ">
                        {/* save buy */}
                        <div className='d-md-flex align-items-center justify-content-between'>
                            <div className='d-flex justify-content-end p-2'>
                                <div><FavoriteBorderIcon sx={{ fontSize: 30, marginLeft: '30px' }} /></div>
                                <Link to={'/mycart'} >
                                    <div className='mx-2'>
                                        <Badge badgeContent={addCart.total} color="success">
                                            <ShoppingCartIcon color="action" />
                                        </Badge>
                                    </div>
                                </Link>
                            </div>
                            <div className='p-3 account-box d-flex align-items-center fw-bold' onClick={() => { navigate('/login'); setHasActiveLogin(false) }}>
                                {!name ?
                                    <div className="entered">
                                        <AccountCircleIcon fontSize='large' />
                                        <p className='mt-3'>Login/Signin</p>
                                    </div>
                                    :

                                    <div id={width} className="entered">
                                        <p>Hi,{name}</p>

                                        <AccountCircleIcon fontSize='large' />
                                    </div>

                                }
                            </div>
                        </div>
                    </form>
                    <ul class="navbar-nav mr-auto">
                        <ol class="nav-item dropdown d-lg-none">
                            <ol class="nav-item dropdown p-1" >
                                <a class="nav-link dropdown-toggle fs-5 fw-bold " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Shop
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {
                                        category.map(item => {
                                            return <Browse {...item} />

                                        })}
                                </ul>
                            </ol>
                        </ol>
                    </ul>
                </div>
            </nav>
            <nav class="nav display">
                {
                    category.map(item => {
                        return <Browse key={item.id} {...item} />

                    })
                }
            </nav>

        </>

    )
}
