import React from 'react';
import { useEffect } from 'react';
import styled from "./Modal.module.css";
import PropTypes from "prop-types";


export const Modal = ({largeImageURL, onClose}) => {
    useEffect(() => {
		const handleEsc = ({ code }) => {
			if (code === 'Escape') onClose()
			console.log('esc')
		}
		document.addEventListener('keydown', handleEsc)
		return () => document.removeEventListener('keydown', handleEsc)
	}, [onClose])

    return (
        <div className={styled.Overlay}>
            <div className={styled.Modal}>
                <img src={largeImageURL} alt="" />
            </div>
        </div>
    );
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};