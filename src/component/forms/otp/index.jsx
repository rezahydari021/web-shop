import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import { Button, Input, TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';
export default function Otp({ style, random, statef, setName,setHasActiveLogin }) {
  const navigate = useNavigate()
  const [time, setTiem] = useState(98000)
  // useEffect(() =>
  //   setTiem(time - 1)
  // )
  const verifyRef = useRef()
  const handleverify = () => {

    const valueVerify = verifyRef.current.value
    if (valueVerify == random) {
      setState(true)
    }
  }
  const [state, setState] = useState(false)
  console.log(random)
  return (
    <div className="otp">

      <div className='otptext'>
        <p>we sant a code via email to :
          <br /><span>
            {statef.email}
          </span>
        </p>
      </div>
      <div className='otpinput'>
        <TextField id="outlined-basic" label="Password" variant="outlined" sx={style} color='secondary' inputRef={verifyRef} />
        {state ?
          <Button variant="contained" onClick={() => {
            navigate('/'); setName(statef.name);setHasActiveLogin(true)}}

           sx={style} style={{ backgroundColor: '#9d59a79e' }} >verify</Button>
          :
          <Button variant="contained" onClick={handleverify} sx={style} style={{ backgroundColor: '#9d59a79e' }} >verify</Button>
        }

      </div>
      <div><p className='mt-5'>{time / 1000}</p></div>
    </div>
  );
}
