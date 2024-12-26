import Link from 'next/link';
import Image from 'next/image';
import './index.css';
import { Open_Sans } from 'next/font/google';

const open_sans = Open_Sans({
	subsets: ['cyrillic'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>my_blog</title>
			</head>
			<body className={open_sans.className}>
				<header className="header">
					<nav className="navigation">
						<Link href={'/'} className="title">
							.my_blog
						</Link>
						<Link href={'https://github.com/enagtim'}>
							<Image src="/github.svg" alt="Иконка гитхаба" height={48} width={48} />
						</Link>
					</nav>
				</header>
				{children}
			</body>
		</html>
	);
}
