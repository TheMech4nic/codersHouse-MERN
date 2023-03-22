import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/shared/Button/Button.js/Button'
import Card from '../../components/shared/Card/Card'
import styles from './Home.module.css'

const Home = () => {
  const signInLinkStyle = {
    color : '#0077FF',
    fontWeight : 'bold',
    textDecoration : 'none',
    marginLeft : '10px'
  }

  const history = useNavigate();

  const startRegistration = ()=>{
    history('/authenticate')
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Coderhouse!" icon='logo' >
        <div className={styles.card}>
          <p className={styles.text}>
            We're working hard to get Coderhouse ready for everyone! While we 
            wrap up the finishing youches, we're adding people gradually to 
            make sure nothing breaks
          </p>
          <div>
            <Button onClick={startRegistration} text="Let's Go" />
          </div>
          <div className={styles.signinWrapper}>
            <span className={styles.hasInvite}>Have an invite text</span>
          </div>
        </div>
      </Card>
      
    </div>
  )
}

export default Home