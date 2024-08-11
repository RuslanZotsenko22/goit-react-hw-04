import css from "./ImageGallery.module.css";
import ImageCard from "../imageCard/ImageCard";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map(({ id, alt_description, color, urls, likes }) => (
        <ImageCard
          openModal={openModal}
          key={id}
          alt_description={alt_description}
          color={color}
          urls={urls}
          likes={likes}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
