import React from 'react';
import ReactModal from 'react-modal';
import styles from './style.module.css';

ReactModal.setAppElement('#__next');

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		WebkitOverflowScrolling: 'touch',
		overflow: 'auto',
		width: '900px',
		maxWidth: '90vw',
		paddingInline: '5vw',
		paddingBlock: 45,
		maxHeight: '90vh',
	},
	overlay: {
		backgroundColor: 'rgb(0, 0, 0)',
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
		overscrollBehavior: 'contain',
		zIndex: 4,
		// position: 'fixed',
	},
};

function CustomModal({ modalState, closeModal, children }) {
	React.useEffect(() => {
		// Check if modal is open and prevent body from scrolling
		if (typeof window !== 'undefined') {
			const body = document.body;

			if (modalState) {
				// Disable scroll
				body.style.overflow = 'hidden';
				body.style.height = '100vh';
			} else {
				body.style.overflowY = 'auto';
				body.style.height = 'auto';
			}
		}
	}, [modalState]);

	return (
		<ReactModal
			isOpen={modalState}
			onRequestClose={closeModal}
			style={{
				content: customStyles.content,
				overlay: customStyles.overlay,
			}}
			closeTimeoutMS={500}
		>
			<div className={styles.modalTitleContainer}>
				<h1>Please fill the information below </h1>
				<button onClick={closeModal}>&#x2715;</button>
			</div>
			{children}
		</ReactModal>
	);
}

export default CustomModal;
