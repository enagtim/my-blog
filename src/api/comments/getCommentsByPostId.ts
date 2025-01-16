import { IComments, IComment } from '@/src/interfaces/comment.interface';

export async function getCommentsByPostId(id: string): Promise<IComment[]> {
	const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/comments/post/${id}?limit=1`, {
		cache: 'no-store',
	});
	if (!response.ok) {
		throw new Error('Failed to fetch posts');
	}
	const data: IComments = await response.json();
	return data.comments;
}
