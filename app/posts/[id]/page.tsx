import { getPostById } from '@/src/api/posts/getPostById';
import { notFound } from 'next/navigation';
import styles from './page.module.css';
import Image from 'next/image';
import Like from '@/src/shared/ui/LikeIcon/LikeIcon';
import LikeButton from '@/src/shared/ui/LikeButton/LikeButton';
import { getCommentsByPostId } from '@/src/api/comments/getCommentsByPostId';
import { IComment } from '@/src/interfaces/comment.interface';
import UserComment from '@/src/entity/UserComment/UserComment';
import Form from '@/src/entity/Form/Form';
import { IPageParams } from '@/src/interfaces/page.params.interface';

export default async function PostPage({ params }: { params: IPageParams }) {
	const { id } = await params;
	const post = await getPostById(id);
	const comments = await getCommentsByPostId(id);
	if (!post || !comments) {
		notFound();
	}
	return (
		<main>
			<section className={styles.post_content}>
				<div className={styles.title}>{post.title}</div>
				<div className={styles.tags}>
					<div className={styles.tags_title}>{post.tags[0]}</div>
					<Image width={5} height={5} alt="Separator" src="/ellipse.svg" />
					<div className={styles.tags_title}>{post.tags[1]}</div>
					<Image width={5} height={5} alt="Separator" src="/ellipse.svg" />
					<div className={styles.tags_title}>{post.tags[2]}</div>
					<Image width={5} height={5} alt="Separator" src="/ellipse.svg" />
					<Like count={post.reactions.likes} />
				</div>
				<div className={styles.img}>
					<Image width={637} height={395} alt="Image post" src="/mini.png" />
				</div>
				<div className={styles.description}>{post.body}</div>
				<div className={styles.like_container}>
					<div className={styles.like_container__text}>Did you like it? Click</div>
					<LikeButton />
				</div>
			</section>
			<section className={styles.comments}>
				<div className={styles.comment_title}>Comments</div>
				{comments.map((comment: IComment) => (
					<UserComment
						key={comment.id}
						id={comment.id}
						username={comment.user.username}
						fullName={comment.user.fullName}
						body={comment.body}
					/>
				))}
			</section>
			<Form postId={id} userId={190} />
		</main>
	);
}
