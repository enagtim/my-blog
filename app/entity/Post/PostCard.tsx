import Image from 'next/image';
import { IPostCard } from './PostCard.interface';
import styles from './PostCard.module.css';
import LinkButton from '../../shared/ui/LinkButton/LinkButton';
import Like from '../../shared/ui/LikeIcon/LikeIcon';
import { GetPluralForm } from '@/app/features/getPluralForm';

export default function PostCard({ ...props }: IPostCard) {
	return (
		<div className={styles.container}>
			<div className={styles.container_img}>
				<Image width={300} height={192} alt="Изображение карточки поста" src="/mini.png" />
			</div>
			<div className={styles.text_content}>
				<div className={styles.text_content_header}>
					<div className={styles.tags}>
						<div className={styles.tags_title}>{props.tag}</div>
						<Image width={5} height={5} alt="Разделитель" src="/ellipse.svg" />
						<div className={styles.tags_created}>
							{`${props.publication} ${GetPluralForm(props.publication, 'месяц', 'месяца', 'месяцев')} назад`}
						</div>
					</div>
					<Like count={props.like} />
				</div>
				<div className={styles.text_content_title}>{props.title}</div>
				<div className={styles.text_content_description}>{props.description}</div>
			</div>
			<div className={styles.footer}>
				<div
					className={styles.time_read}
				>{`${props.timeRead} ${GetPluralForm(props.timeRead, 'минута', 'минуты', 'минут')}`}</div>
				<LinkButton />
			</div>
		</div>
	);
}
