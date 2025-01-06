import { IPostCard } from '@/src/interfaces/post.card.interface';

export async function getPostById(id: string): Promise<IPostCard> {
	const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/posts/${id}`, {
		cache: 'force-cache',
	});
	if (!response.ok) {
		throw new Error('Failed to fetch posts');
	}
	const data: IPostCard = await response.json();
	return data;
}
