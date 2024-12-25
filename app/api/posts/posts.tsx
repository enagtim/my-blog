import PostCard from '@/app/entity/Post/PostCard';
import styles from './posts.module.css';

export default function Posts() {
	return (
		<section className={styles.grid_cards}>
			<PostCard
				tag="Front-end"
				publication={1}
				like={4}
				title="Как работать с CSS Grid"
				description="Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."
				timeRead={3}
			/>
			<PostCard
				tag="Front-end"
				publication={1}
				like={4}
				title="Как работать с CSS Grid"
				description="Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."
				timeRead={3}
			/>
			<PostCard
				tag="Front-end"
				publication={1}
				like={4}
				title="Как работать с CSS Grid"
				description="Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."
				timeRead={3}
			/>
		</section>
	);
}
