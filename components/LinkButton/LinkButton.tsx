import Image from 'next/image';
import styles from './LinkButton.module.css';
import Link from 'next/link';

export default function LinkButton() {
	return (
		<Link href={'#'} className={styles.link}>
			Читать
			<Image
				className={styles.img}
				width={20}
				height={20}
				alt="Икона стрелка"
				src="/arrow-icon.svg"
			/>
		</Link>
	);
}
