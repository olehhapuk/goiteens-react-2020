import PropTypes from 'prop-types';

function ImageGalleryItem({ imageUrl, largeImgUrl }) {
  return (
    <li className="ImageGalleryItem">
      <img src={imageUrl} alt="" className="ImageGalleryItem-image" />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  largeImgUrl: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
