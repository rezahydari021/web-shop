import React, { useRef, useState } from 'react'
import { Button, TextField } from '@mui/material'
export default function Signin({ style, changeSign, onclick, onOtp }) {
    let array = [
        {
          name: '',
          email: '',
          password: ''
        }
      ];
      
      const nameRef = useRef(null);
      const emailRef = useRef(null);
      const passwordRef = useRef(null);
      
      const handleSignin = () => {
        onOtp(false);
        console.log({
          name: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value
        });
        array[0] = {
          name: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value
        };
      };
      
      
    return (
        <div className='sign' id={changeSign} onClick={onclick}>
            <div className='sign-text'>
                <p>Sign in </p>
            </div>
            <div className='sign-input' >

                <TextField id="standard-basic" label="Name" variant="standard" sx={style} color='secondary' inputRef={nameRef} />
                <TextField id="standard-basic" label="Email" variant="standard" sx={style} color='secondary' inputRef={emailRef}/>
                <TextField id="standard-basic" label="Password" variant="standard" sx={style} color='secondary' inputRef={passwordRef} />
            </div><br />
            <Button variant="contained" sx={style} style={{ backgroundColor: '#00000090' }}>Sign in</Button>
        </div>
    )
}
