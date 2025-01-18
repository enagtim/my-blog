import styles from './page.module.css';
import { IPostCard } from '../src/interfaces/post.card.interface';
import { getAllPosts } from '@/src/api/posts/getAllPosts';
import { PostCard } from '@/src/entity/PostCard/PostCard';

export default async function Posts() {
	const { posts } = await getAllPosts();
	return (
		<>
			{posts.length > 0 ? (
				<main>
					<section className={styles.cards_post}>
						{posts.map((post: IPostCard) => (
							<PostCard
								key={post.id}
								id={post.id}
								title={post.title}
								body={post.body}
								tags={post.tags}
								reactions={post.reactions}
								timeRead={5}
								href={`/posts/${post.id}`}
							/>
						))}
					</section>
				</main>
			) : (
				<p>Error loading posts. Please try again later.</p>
			)}
		</>
	);
}
