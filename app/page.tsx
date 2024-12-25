import PostCard from './entity/PostCard/PostCard';
import { IPostCard, IPosts } from './interfaces/post.card.interface';
import styles from './page.module.css';

export default async function PostPage() {
	try {
		const res = await fetch('https://dummyjson.com/posts?limit=3', {
			cache: 'force-cache',
		});
		if (!res.ok) {
			throw new Error('Failed to fetch posts');
		}
		const { posts }: IPosts = await res.json();
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
							publication={1}
							timeRead={1}
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
