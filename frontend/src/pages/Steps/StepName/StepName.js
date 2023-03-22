import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button.js/Button'
import TextInput from '../../../components/shared/TextInput/TextInput'
import  { setName } from '../../../store/activateSlice'
import styles from './StepName.module.css'

const StepName = ({onNext}) => {
  const { name } = useSelector((state) => state.activate)
  const [fullName , setFullName] = useState(name)
  const dispatch = useDispatch();

  function nextStep() {
    if(!fullName) {
      return
    }
    dispatch(setName(fullName));
    onNext();
  }
  return (
    <>
    <Card title="What's your full name" icon='goggle-emoji'>
         <TextInput
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}/>
          <div>
              <p className={styles.paragraph}>
                People use real names at codershouse :) ! 
            </p>
            <div>
              <Button onClick={nextStep} text="Next" />
            </div>
          </div>
      </Card>
  </>
  )
}

export default StepName