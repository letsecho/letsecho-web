import React from 'react';
import PlayStore from "../images/playstore.png";
import AppStore from "../images/appstore.png";
import Link from 'next/link'
import Image from 'next/image'

export const DownloadSection = () => {
  return (
    <div className="stickyPlacer">
      <h2 className="joinName">
        <b>Download to join <span className="bigArrow">➔</span></b>
      </h2>
      <Link href="https://apps.apple.com/app/letsecho/id1563740904">
        <Image src={AppStore} alt="AppStore" className="finalBottons" />
      </Link>
      <Link href="https://play.google.com/store/apps/details?id=com.letsecho.letsechoapp&hl=es_419&gl=US">
        <Image src={PlayStore} alt="PlayStore" className="finalBottons" />
      </Link>
    </div>
  )
}
