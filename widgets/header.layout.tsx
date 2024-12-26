'use client';
import { useGitHub } from '@/context/GitHub.context';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.layout.module.css';

export default function Header({ children }: { children: React.ReactNode }) {
	const { githubUrl } = useGitHub();
	return (
		<>
			<header className={styles.header}>
				<nav className={styles.navigation}>
					<Link href={'/'} className={styles.title}>
						.my_blog
					</Link>
					<Link href={githubUrl}>
						<Image src="/github.svg" alt="Иконка гитхаба" height={48} width={48} />
					</Link>
				</nav>
			</header>
			{children}
		</>
	);
}
