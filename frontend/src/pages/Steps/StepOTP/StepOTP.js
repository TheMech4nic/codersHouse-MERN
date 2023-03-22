import React, { useState } from 'react'
import Button from '../../../components/shared/Button/Button.js/Button'
import Card from '../../../components/shared/Card/Card'
import TextInput from '../../../components/shared/TextInput/TextInput'
import styles from './StepOtp.module.css'
import {  verifyOtp } from '../../../http';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../../store/authSlice'

const StepOTP = ({onNext}) => {
  const [otp, setOtp] = useState('')
  const {phone, hash} = useSelector((state) => state.auth.otp)
  const dispatch = useDispatch();

  async function submit() {
    try {
      const { data } = await verifyOtp({otp, phone , hash});
      console.log(data);
      dispatch(setAuth(data));

    } catch(err){
      console.log(err);
    }
  }

  return (
    <div className={styles.cardWrapper}>
    <Card title="Enter the code we just sent you" icon='lock-emoji'>
         <TextInput
            value={otp}
            onChange={(e) => setOtp(e.target.value)}/>
          <div>
            <div className={styles.actionButtonWrap}>
              <Button onClick={submit} text="Next" />
            </div>
              <p className={styles.bottomParagraph}>
                By entering your email, you're agreeing to our Terms of   Service and Privacy Policy. Thanks!!
            </p>
          </div>
      </Card>
  </div>
  )
}

export default StepOTP