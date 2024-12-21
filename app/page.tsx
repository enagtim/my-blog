import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import PostCard from '@/components/PostCard/PostCard';

export default function PostPage() {
	return (
		<main>
			<nav className={styles.navigation}>
				<div className={styles.title}>.my_blog</div>
				<Link href={'https://github.com/enagtim'}>
					<Image src="/github.svg" alt="Иконка гитхаба" height={48} width={48} />
				</Link>
			</nav>
			<section className={styles.card}>
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
		</main>
	);
}
