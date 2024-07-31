import { Password } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import Otp from '../otp'
export default function Login({ style, changeLogin, onclick, onOtp, users }) {

    const emailRef = useRef()
    const passwordRef = useRef()
    const [isperson, setIsPerson] = useState(false)
    const handleUsers = () => {
        const emailvalue = emailRef.current.value
        const passwordvalue = passwordRef.current.value
        const person = users.find(item => item.email === emailvalue)
        const Passwordd = person && (person.password === passwordvalue)


        if (!person) {
            setIsPerson(true);
        } else if (!Passwordd) {
            setIsPerson(true);
      
        } else if(person && Passwordd) {
            setIsPerson(false);
            onOtp(person); // Proceed with the OTP function
            alert("enter")
        }
    }
    return (

        <div className={changeLogin} onClick={onclick}>
            <p >Login</p>
            <div id={changeLogin}>
                <TextField id="outlined-basic" inputRef={emailRef} label="Email" variant="outlined" sx={style} color='secondary' />
                {isperson && <p style={{ color: 'red', fontSize: '15px' }}>Incorrect username .</p>
                }
                <TextField className='mt-3' onChange={handleUsers} id="outlined-basic" inputRef={passwordRef} label="Password" variant="outlined" sx={style} color='secondary' />
                {isperson && <p style={{ color: 'red', fontSize: '15px' }}>Incorrect  password.</p>
                }
                {isperson ?
                    <Button variant="contained" sx={style} onclick={onOtp} style={{ backgroundColor: '#9d59a79e' }} >Log in</Button>
                    :
                    <Button variant="contained" onClick={handleUsers} sx={style} style={{ backgroundColor: '#9d59a79e' }} >Log in</Button>
                }
            </div><br />
        </div>
    )
}
