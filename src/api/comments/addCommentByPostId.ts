export async function addCommentsByPostId(
	body: string,
	postId: string,
	userId: number,
): Promise<void> {
	const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/comments/add`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			body: body,
			postId: postId,
			userId: userId,
		}),
	});
	if (!response.ok) {
		throw new Error('Failed to fetch posts');
	}
}
