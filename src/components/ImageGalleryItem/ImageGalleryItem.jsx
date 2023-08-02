import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import styled from './ImageGalleryItem.module.css';
import PropTypes from "prop-types";

export const ImageGalleryItem = ({ image }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <li key={image.id} image={image} className={styled.ImageGalleryItem}>
        <img className={styled.ImageGalleryItemImage} src={image.webformatURL} alt="" onClick={handleOpenModal} />
      </li>
      {isModalOpen && (
        <Modal largeImageURL={image.largeImageURL} onClose={handleCloseModal} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};