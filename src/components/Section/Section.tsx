import Image from 'next/image';
import { AspectRatio } from '../ui/aspect-ratio';
import { PrimaryButton } from '../Buttons/Buttons';
import './Section.css';

const CardProduct = () => {
  return (
    <article className="card-product">
      <div className="card-product__image">
        <AspectRatio ratio={2.5 / 3}>
          <Image fill src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" className="rounded-md object-cover" />
        </AspectRatio>
      </div>
      <div className="card-product__content">
        <h3>Product name</h3>
        <span>0.000.000$</span>
      </div>
    </article>
  );
};

const Section = () => {
  return (
    <section className="section-wrapper">
      <div className="section-container">
        <div className="section-container__left">
          <h2>Title section</h2>
          <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quis dicta neque molestias dolorem sequi nesciunt inventore distinctio provident dolore voluptate totam, maxime fugit labore quod, voluptates nisi consequatur doloremque.</p>
          <PrimaryButton>View all</PrimaryButton>
        </div>
        <div className="section-container__right">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </section>
  );
};

export default Section;
