import React from 'react';
import Styles from './styles.module.css';

function HorizontalSlider(props) {
	if (typeof window !== 'undefined') {
		const slider = document.querySelector(`#${props.id}`);
		let isDown = false;
		let startX;
		let scrollLeft;

		if (slider) {
			slider.addEventListener('mousedown', (e) => {
				isDown = true;
				startX = e.pageX - slider.offsetLeft;
				scrollLeft = slider.scrollLeft;
				slider.style.cursor = props.cursor ? props.cursor : 'grabbing';
			});
			slider.addEventListener('mouseleave', () => {
				isDown = false;
				slider.style.cursor = props.cursor ? props.cursor : 'grab';
			});
			slider.addEventListener('mouseup', () => {
				isDown = false;
				slider.style.cursor = props.cursor ? props.cursor : 'grab';
			});
			slider.addEventListener('mousemove', (e) => {
				if (!isDown) return;
				e.preventDefault();
				const x = e.pageX - slider.offsetLeft;
				const walk = (x - startX) * 1; //to scroll fast, multiply by higher number
				slider.scrollLeft = scrollLeft - walk;
			});
		}
	}

	return (
		<div
			className={Styles.container + ' ' + 'customizedScrollbar'}
			id={props.id}
			style={props.style}
		>
			{props.children}
		</div>
	);
}

export default HorizontalSlider;
