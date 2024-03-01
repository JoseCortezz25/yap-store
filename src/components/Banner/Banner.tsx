import Image from 'next/image';
import './Banner.css';
import { PrimaryButton } from '../Buttons/Buttons';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__content">
          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus alias asperiores impedit! Nemo explicabo, dolores unde quaerat quia est iure consequatur illo excepturi sint omnis culpa, nulla neque expedita facilis.</p>
          <PrimaryButton>Learn more</PrimaryButton>
        </div>
        <div className="banner__image">

        </div>
      </div>
    </section>
  );
};

export default Banner;
