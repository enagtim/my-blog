import Image from 'next/image';
import styles from './PostCard.module.css';
import LinkButton from '../../shared/ui/LinkButton/LinkButton';
import Like from '../../shared/ui/LikeIcon/LikeIcon';
import { GetPluralForm } from '@/helpers/getPluralForm';
import { IPostCard } from '@/interfaces/post.card.interface';

export default function PostCard({ ...props }: IPostCard & { timeRead: number }) {
	return (
		<div className={styles.container}>
			<div className={styles.container_img}>
				<Image width={300} height={192} alt="Изображение карточки поста" src="/mini.png" />
			</div>
			<div className={styles.text_content}>
				<div className={styles.text_content_header}>
					<div className={styles.tags}>
						<div className={styles.tags_title}>{props.tags[0]}</div>
						<Image width={5} height={5} alt="Разделитель" src="/ellipse.svg" />
						<div className={styles.tags_title}>{props.tags[1]}</div>
						<Image width={5} height={5} alt="Разделитель" src="/ellipse.svg" />
						<div className={styles.tags_title}>{props.tags[2]}</div>
					</div>
					<Like count={props.reactions.likes} />
				</div>
				<div className={styles.text_content_title}>{props.title}</div>
				<div className={styles.text_content_description}>{props.body}</div>
			</div>
			<div className={styles.footer}>
				<div
					className={styles.time_read}
				>{`${props.timeRead} ${GetPluralForm(props.timeRead, 'minute', 'minutes', 'minutes')}`}</div>
				<LinkButton />
			</div>
		</div>
	);
}
