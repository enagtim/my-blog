'use client';
import Image from 'next/image';
import styles from './PostCard.module.css';
import LinkButton from '../../shared/ui/LinkButton/LinkButton';
import Like from '../../shared/ui/LikeIcon/LikeIcon';
import { GetPluralForm } from '@/src/helpers/getPluralForm';
import { IPostCard } from '@/src/interfaces/post.card.interface';
import { motion } from 'framer-motion';

export function PostCard({ ...props }: IPostCard & { timeRead: number; href: string }) {
	return (
		<motion.articale
			key={props.id}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<div className={styles.container}>
				<div className={styles.container_img}>
					<Image width={300} height={192} alt="Post image" src="/mini.png" />
				</div>
				<div className={styles.text_content}>
					<div className={styles.text_content_header}>
						<div className={styles.tags}>
							<div className={styles.tags_title}>{props.tags[0]}</div>
							<Image width={5} height={5} alt="Separatorr" src="/ellipse.svg" />
							<div className={styles.tags_title}>{props.tags[1]}</div>
							<Image width={5} height={5} alt="Separator" src="/ellipse.svg" />
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
					<LinkButton href={props.href} />
				</div>
			</div>
		</motion.articale>
	);
}
