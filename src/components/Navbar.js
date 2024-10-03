import { useState } from 'react';
import Link from 'next/link';
import styles from '../assets/styles/navbar.module.scss';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`${styles.navbar}${isMenuOpen ? ` ${styles.open}` : ''}`}>
      <div className={styles.navbarLogo}>
        <Link href='/' passHref>
          <div onClick={handleLinkClick}>
            <img
              src='https://res.cloudinary.com/dcknlnne1/image/upload/v1727997060/lweb/tkraxnj8dcw8p0egbbwe.png'
              alt='LB Web Logo'
            />
          </div>
        </Link>
      </div>
      <div className={styles.menuButton} onClick={handleMenuToggle}>
        ☰
      </div>
      <div
        className={`${styles.navLinks}${isMenuOpen ? ` ${styles.open}` : ''}`}
      >
        <Link href='/' onClick={handleLinkClick} passHref>
          Home
        </Link>
        <Link href='/education' onClick={handleLinkClick} passHref>
          Education
        </Link>
        <Link href='/experience' onClick={handleLinkClick} passHref>
          Experience
        </Link>
        <Link href='/contact' onClick={handleLinkClick} passHref>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
