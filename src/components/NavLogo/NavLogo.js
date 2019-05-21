import React from 'react'

import LogoImage from '../../assets/NavLogo/Asset_2@4x.png'
import styles from './NavLogo.module.css'

const NavLogo = () => (
	<img src={LogoImage} className={styles.Logo} alt="sjedi.ba Logo"/>
)

export default NavLogo