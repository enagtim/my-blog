import Image from 'next/image';
import { IPostCardProps } from './PostCard.interface';
import styles from './PostCard.module.css';
import LinkButton from '../LinkButton/LinkButton';
import Like from '../Like/Like';

function getPluralForm(number: number, singular: string, few: string, many: string): string {
	const Number = number % 100;
	const lastDigit = Number % 10;
	if (Number > 10 && Number < 20) {
		return many;
	}
	if (lastDigit > 1 && lastDigit < 5) {
		return few;
	}
	if (lastDigit === 1) {
		return singular;
	}
	return many;
}
export default function PostCard({ ...props }: IPostCardProps) {
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
							{`${props.publication} ${getPluralForm(props.publication, 'месяц', 'месяца', 'месяцев')} назад`}
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
				>{`${props.timeRead} ${getPluralForm(props.timeRead, 'минута', 'минуты', 'минут')}`}</div>
				<LinkButton />
			</div>
		</div>
	);
}
