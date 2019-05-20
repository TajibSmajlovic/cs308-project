import React from 'react'

import LogoImage from '../../assets/Logo/Asset_1@4x.png'
import styles from './Logo.module.css'

const Logo = () => (
	<img src={LogoImage} className={styles.Logo} alt="sjedi.ba Logo"/>
)

export default Logo