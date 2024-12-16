import Image from 'next/image';
import styles from './Like.module.css';

export default function Like({ count }: { count: number }) {
	return (
		<div className={styles.container}>
			{count}
			<Image width={16} height={16} src="/like.svg" alt="Иконка лайка" />
		</div>
	);
}
