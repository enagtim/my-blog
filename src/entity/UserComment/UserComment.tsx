import { IComment, IUser } from '@/src/interfaces/comment.interface';
import Image from 'next/image';
import styles from './UserComment.module.css';

export default function UserComment({ ...props }: IUser & { body: string }) {
	return (
		<div className={styles.comment}>
			<div className={styles.comment__user_data}>
				<div className={styles.user_fullname}>{props.fullName}</div>
				<Image width={5} height={5} alt="Разделитель" src="/ellipse.svg" />
				<div className={styles.user_username}>{props.username}</div>
			</div>
			<div className={styles.comment__text}>{props.body}</div>
		</div>
	);
}
