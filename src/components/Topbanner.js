import React, { useState } from 'react';
import styles from '../assets/styles/topbanner.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Topbanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  const handleEmailButtonClick = () => {
    window.location.href = 'mailto:info@lbweb.eu';
  };

  const handleCloseButtonClick = () => {
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className={styles.topBanner}>
          <div className={styles.container}>
            <div className={styles.bannerContent}>
              <button
                className={styles.closeButton}
                onClick={handleCloseButtonClick}
              >
                X
              </button>
              <h1 className={styles.topbannerh1}>Websites from 30€!</h1>
              <p>Send me an email to get more information</p>
              <button onClick={handleEmailButtonClick}>Send Email</button>
              <div className={styles.socialIcons}>
                <Link href='https://github.com/lbielskus'>
                  <FaGithub className={styles.socialLogos} />
                </Link>
                <Link href='https://www.linkedin.com/in/lbielskus'>
                  <FaLinkedin className={styles.socialLogos} />
                </Link>
                <Link href='https://www.fiverr.com/liu600/create-your-mobile-responsive-website-using-reactjs'>
                  <Image
                    src='https://res.cloudinary.com/dcknlnne1/image/upload/v1727997054/lweb/rnfxxurdljmiaoqaemgi.png'
                    alt='Fiverr'
                    width={100}
                    height={100}
                    className={styles.fiverrLogo}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Topbanner;
