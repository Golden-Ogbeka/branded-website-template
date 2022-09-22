import React from 'react';
import styles from './style.module.css';
import InfoImage from '../../../public/icons/info.png';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert } from '../../../store/slices/alertSlice';

function Alert() {
	const alertState = useSelector((state) => state.alert);
	const dispatch = useDispatch();

	const getBackgroundColorFromStatus = () => {
		let color = '';
		switch (alertState.type) {
			case 'error':
				color = '#d9534f';
				break;
			case 'warning':
				color = '#f0ad4e';
				break;
			case 'info':
				color = '#0275d8';
				break;
			case 'success':
				color = '#5cb85c';
				break;

			default:
				break;
		}
		return color;
	};

	return (
		<div
			className={styles.container}
			style={{
				opacity: alertState.open ? 1 : 0,
				visibility: alertState.open ? 'visible' : 'hidden',
				backgroundColor: getBackgroundColorFromStatus(),
			}}
		>
			<div className={styles.textContainer}>
				<Image
					src={InfoImage}
					style={{
						filter: 'brightness(0) invert(1)', //icon is black so filter to white
					}}
					alt='info'
				/>
				<span>{alertState.message}</span>
			</div>
			<span className={styles.closeButton} onClick={() => dispatch(closeAlert())}>
				&times;
			</span>
		</div>
	);
}

export default Alert;
