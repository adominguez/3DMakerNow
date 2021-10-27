import React, { useState } from 'react';
import CustomSection from '../CustomSection/CustomSection';
import { colors } from '../../theme/colors';
import Slider from 'react-slick'
import { StyledImg, Modal, ModalImg } from './SlideImages.Styles';
import CloseButton from '../../images/close-btn.svg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const SlideImages = ({ images, title, initialText }) => {
  const [imageSelected, setImageSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const setImage = (image) => {
    setShowModal(true);
    setImageSelected(image);
  }

  const closeModal = () => {
    setShowModal(false);
    setImageSelected(null);
  }

  return (
  <CustomSection
    backgroundColor={colors.white}
    titleColor={colors.primary}
    color={colors.blueGray}
  >
    <div className="block slider">
      <h2>{title || 'Impresiones realizadas'}</h2>
      <div dangerouslySetInnerHTML={{ __html: initialText }} />
      <Slider className="slide-images" {...settings}>
        {images &&
          images?.length &&
          images?.map((image, key) => (
            <button key={key} onClick={() => setImage(image)}>
              <StyledImg
                objectFit="cover"
                image={image?.localFile?.childImageSharp?.gatsbyImageData}
                alt={image.altText}
              />
            </button>
          ))}
      </Slider>
    </div>
    {
      imageSelected && showModal &&
        <Modal onClick={closeModal}>
          <ModalImg
            objectFit="cover"
            image={imageSelected?.localFile?.childImageSharp?.gatsbyImageData}
            alt={imageSelected.altText}
          />
          <button className="close">
            <img src={CloseButton} alt="close button" />
          </button>
        </Modal>
    }
  </CustomSection>
)}

export default SlideImages