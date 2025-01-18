'use client';
import { useState } from 'react';
import styles from './LikeButton.module.css';
import cn from 'classnames';
import LikeIcon from '..//..//..//../public/like-icon.16.svg';

export default function LikeButton() {
	const [isActiveButton, setIsActiveButton] = useState<boolean>(false);

	const changeColorButton = () => {
		setIsActiveButton((state) => !state);
	};
	return (
		<button
			aria-label="Click like post"
			onClick={changeColorButton}
			className={cn(styles.button, {
				[styles.button_active]: isActiveButton,
			})}
		>
			<LikeIcon />
		</button>
	);
}
