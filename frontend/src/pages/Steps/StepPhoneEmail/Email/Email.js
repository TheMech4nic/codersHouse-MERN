import React, { useState } from 'react'
import Button from '../../../../components/shared/Button/Button.js/Button'
import Card from '../../../../components/shared/Card/Card'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import styles from '../StepPhoneEmail.module.css'

const Email = ({ onNext }) => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <Card title="Enter your Email Id" icon='email-emoji'>
         <TextInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
          <div>
          <div className={styles.actionButtonWrap}>
            <Button text="Next" onClick={onNext} />
          </div>
            <p className={styles.bottomParagarh}>
              By entering your email, you're agreeing to our Terms of Service and Privacy Policy. Thanks!!
          </p>
          </div>
      </Card>
    </div>
  )
}

export default Email