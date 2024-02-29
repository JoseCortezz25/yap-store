import Image from 'next/image';
import { AspectRatio } from '../ui/aspect-ratio';

interface CardSectionProps {
  image: string;
  title: string;
}

const CardSection = ({ image, title }: CardSectionProps) => {
  return (
    <article className="card-section">
      <div className="w-full overflow-hidden mb-4">
        <AspectRatio ratio={2.5 / 4}>
          <Image fill src={image} alt={title} className="rounded-md object-cover" />
        </AspectRatio>
      </div>
      <h3>{title}</h3>
    </article>
  );
};

export default CardSection;
