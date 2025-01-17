import './index.css';
import { Open_Sans } from 'next/font/google';
import { GitHubProvider } from '../src/context/GitHub.context';
import Header from '@/src/widgets/header.layout';

const open_sans = Open_Sans({
	subsets: ['cyrillic'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>my_blog</title>
			</head>
			<body className={open_sans.className}>
				<GitHubProvider>
					<Header children={children} />
				</GitHubProvider>
			</body>
		</html>
	);
}
