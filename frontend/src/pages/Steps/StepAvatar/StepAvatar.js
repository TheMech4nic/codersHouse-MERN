import React, { useState } from 'react'
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button.js/Button'
import styles from './StepAvatar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setAvatar } from '../../../store/activateSlice'

const StepAvatar = ({onNext}) => {
  const { name } = useSelector((store) => store.activate)
  const [image, setImage] = useState('/images/monkey-avatar.png')
  const dispatch = useDispatch()

  function captureImage(e){
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function() {
      setImage(reader.result)
      dispatch(setAvatar(reader.result))
    }
  }

  function submit() {
      
  }
  return (
    <>
     <Card title={`Okay! ${name}`} icon='monkey-emoji'>
        <p className={styles.subHeading}>How's this photo?</p>
        <div className={styles.avatarWrapper}>
          <img src={image} alt='avatar' className={styles.avatarImage} />
        </div>
        <div>
          <input onChange={captureImage} id='avatarInput' type='file' className={styles.avatarInput} />
          <label htmlFor='avatarInput' className={styles.avatarLabel}>Choose a different photo</label>
        </div>
          <div>
            <div>
              <Button onClick={submit} text="Next" />
            </div>
          </div>
      </Card>
  </>
  )
}

export default StepAvatar