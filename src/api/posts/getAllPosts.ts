import { IPosts } from '@/src/interfaces/post.card.interface';

export async function getAllPosts(): Promise<IPosts> {
	const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/posts?limit=6`, {
		cache: 'force-cache',
	});
	if (!response.ok) {
		throw new Error('Failed to fetch posts');
	}
	const data: IPosts = await response.json();
	return data;
}
