import React from 'react';
import styles from '../assets/styles/about.module.scss';

const About = () => {
  return (
    <section className={styles['about-me-comp']}>
      <div className={styles['logo-container']}>
        <img
          src='https://res.cloudinary.com/dcknlnne1/image/upload/v1727997033/lweb/sdvl1mklmscaskh6goyb.png'
          alt='HTML5 Logo'
          className={styles.logo}
        />
        <img
          src='https://res.cloudinary.com/dcknlnne1/image/upload/v1727997033/lweb/b3ddctdz0yhfnvmgjqoo.png'
          alt='CSS3 Logo'
          className={styles.logo}
        />
        <img
          src='https://res.cloudinary.com/dcknlnne1/image/upload/v1727997033/lweb/pnwdfoutoqknvlekxi7y.png'
          alt='JavaScript Logo'
          className={styles.logo}
        />
        <img
          src='https://res.cloudinary.com/dcknlnne1/image/upload/v1727997062/lweb/w7p7jyhapl9trlh5sdj4.png'
          alt='React Logo'
          className={styles.logo}
        />
        <img
          src='https://res.cloudinary.com/dcknlnne1/image/upload/v1727997071/lweb/dgpxqclijfgn5kn4ti7f.png'
          alt='TypeScript Logo'
          className={styles.logo}
        />
        <img
          src='https://res.cloudinary.com/dcknlnne1/image/upload/v1727997060/lweb/ftazwux6vd3ull8lwj3o.png'
          alt='Node.js Logo'
          className={styles.logo}
        />
        <img
          src='https://res.cloudinary.com/dcknlnne1/image/upload/v1727997032/lweb/hlhgbzadffi056ij9ukt.png'
          alt='Illustrator Logo'
          className={styles.logo}
        />
        <img
          src='https://res.cloudinary.com/dcknlnne1/image/upload/v1727997032/lweb/nobypkww7qtnlgrvutwg.png'
          alt='Photoshop Logo'
          className={styles.logo}
        />
        <img
          src='https://res.cloudinary.com/dcknlnne1/image/upload/v1727997055/lweb/bz3y6yux0zrjdngb1pn8.png'
          alt='Github Logo'
          className={styles.logo}
        />
      </div>
      <div className={styles['about-me-text']}>
        <h1>About Me</h1>
        <p>
          I see the developer's work as a constant search for new information,
          therefore, I accept new challenges as a tool for personal improvement,
          which I believe is necessary to achieve yet undiscovered results. I
          believe that programming and related technologies are the future for
          all of us.
        </p>
      </div>
    </section>
  );
};

export default About;
