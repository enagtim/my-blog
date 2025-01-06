import { getPostById } from '@/src/api/getPostById';
import { notFound } from 'next/navigation';
export default async function PostPage({ params }: { params: { id: string } }) {
	const post = await getPostById(params.id);
	if (!post) {
		notFound();
	}
	return (
		<main>
			<section>
				<div>{post.title}</div>
			</section>
		</main>
	);
}
