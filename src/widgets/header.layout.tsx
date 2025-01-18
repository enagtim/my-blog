'use client';
import { useGitHub } from '@/src/context/GitHub.context';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.layout.module.css';

export default function Header({ children }: { children: React.ReactNode }) {
	const { githubUrl } = useGitHub();
	return (
		<>
			<header className={styles.header}>
				<nav className={styles.navigation} role="navigation" aria-label="Main navigation">
					<Link href={'/'} className={styles.title} aria-label="Go to homepage">
						.my_blog
					</Link>
					<Link href={githubUrl} aria-label="Visit to GitHub profile">
						<Image src="/github.svg" alt="GitHub icon" height={48} width={48} />
					</Link>
				</nav>
			</header>
			{children}
		</>
	);
}
