import React from 'react';
import Logo from "../images/logo.svg";
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <Link href="/">
        <Image src={Logo} alt="Letescho logo" width="40"/>
        <h1>Letsecho</h1>
      </Link>
    </header>
  )
}
