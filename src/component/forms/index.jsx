import './index.css'
import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Signin from './sign in'
import Login from './login'
import Otp from './otp'
import { ToastContainer, toast } from 'react-toastify'
export default function Froms({setName,setHasActiveLogin}) {
    const [changeLogin, setChangeLogin] = useState('login')
    const [changeSign, setChangeSign] = useState(null)
    const [statef, setState] = useState({
        hasActive: false,
        email: '',
        name:''
    })
    const handleChangeSign = () => {
        setChangeSign('disapper')
        setChangeLogin('login')
    }
    const handleChangeLogin = () => {
        setChangeSign("show")
        setChangeLogin('login-active')
    }
    const random = Math.floor(Math.random() * 100000)
    const handleOtp = (props) => {
        setState((prevState) => ({
            ...prevState,
            hasActive: true,
            email: props.email
            ,name:props.name
        }))

    }
    const customStyles = {
        width: '250px',
        height: '50px',
        borderRadius: '20px',
    };
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/users')
            .then(res => res.json())
            .then(json => setUsers(json))
    }, [])
    return (
        <div className='forms' >
            {
            statef.hasActive ? <Otp
             setName={setName} style={customStyles} statef={statef} random={random} setHasActiveLogin={setHasActiveLogin}/> :
                    <>
                        <Signin style={customStyles} changeSign={changeSign} onclick={handleChangeSign} onOtp={handleOtp} />
                        <Login style={customStyles} users={users} changeLogin={changeLogin} onclick={handleChangeLogin} onOtp={handleOtp} />
                    </>
            }
        </div>

    )
}
