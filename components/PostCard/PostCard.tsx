import Image from 'next/image';
import { IPostCardProps } from './PostCard.interface';
import styles from './PostCard.module.css';
import LinkButton from '../LinkButton/LinkButton';
import Like from '../Like/Like';

export default function PostCard() {
	return (
		<div className={styles.container}>
			<img alt="Изображение карточки поста" src="/mini.png" />
			<div className={styles.text_content}>
				<div className={styles.text_content_header}>
					<div className={styles.tags}>
						<div className={styles.tags_title}>Front-end</div>
						<img alt="Разделитель" src="/ellipse.svg" />
						<div className={styles.tags_created}>1 месяц назад</div>
					</div>
					<Like count={4} />
				</div>
				<div className={styles.text_content_title}>Как работать с CSS Grid</div>
				<div className={styles.text_content_description}>
					Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды
					подойдут и для верстки основных областей страницы..
				</div>
			</div>
			<div className={styles.footer}>
				<div className={styles.time_read}>3 минуты</div>
				<LinkButton />
			</div>
		</div>
	);
}
