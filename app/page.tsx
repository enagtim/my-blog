import { JSX } from 'react';
import PostCard from '../src/entity/PostCard/PostCard';
import { IPostCard } from '../src/interfaces/post.card.interface';
import styles from './page.module.css';
import { getAllPosts } from '@/src/api/getAllPosts';

export default async function PostPage() {
	try {
		const { posts } = await getAllPosts();
		return (
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
		);
	} catch (e) {
		return (
			<main>
				<section className={styles.cards_post}>
					<p>Error loading posts. Please try again later.</p>
				</section>
			</main>
		);
	}
}
