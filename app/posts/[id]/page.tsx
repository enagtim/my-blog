import { getPostById } from '@/src/api/getPostById';
import { notFound } from 'next/navigation';
import styles from './page.module.css';
import Image from 'next/image';
import Like from '@/src/shared/ui/LikeIcon/LikeIcon';
import LikeButton from '@/src/shared/ui/LikeButton/LikeButton';
export default async function PostPage({ params }: { params: { id: string } }) {
	const post = await getPostById(params.id);
	if (!post) {
		notFound();
	}
	return (
		<main>
			<section className={styles.post_content}>
				<div className={styles.title}>{post.title}</div>
				<div className={styles.tags}>
					<div className={styles.tags_title}>{post.tags[0]}</div>
					<Image width={5} height={5} alt="Разделитель" src="/ellipse.svg" />
					<div className={styles.tags_title}>{post.tags[1]}</div>
					<Image width={5} height={5} alt="Разделитель" src="/ellipse.svg" />
					<div className={styles.tags_title}>{post.tags[2]}</div>
					<Image width={5} height={5} alt="Разделитель" src="/ellipse.svg" />
					<Like count={post.reactions.likes} />
				</div>
				<div className={styles.img}>
					<Image width={637} height={395} alt="Изображение карточки поста" src="/mini.png" />
				</div>
				<div className={styles.description}>{post.body}</div>
				<div className={styles.like_container}>
					<div className={styles.like_container__text}>Did you like it? Click</div>
					<LikeButton />
				</div>
			</section>
			<section className={styles.comments}>
				<div className={styles.comment_title}>Comments</div>
			</section>
		</main>
	);
}
