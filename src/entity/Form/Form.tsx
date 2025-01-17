'use client';
import FormButton from '@/src/shared/ui/FormButton/FormButton';
import Input from '@/src/shared/ui/Input/Input';
import TextArea from '@/src/shared/ui/TextArea/TextArea';
import styles from './Form.module.css';
import { useForm } from 'react-hook-form';
import { FormValues } from '@/src/interfaces/formValue.interface';

export default function Form({ postId, userId }: { postId: string; userId: number }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	const onSubmit = async (data: FormValues): Promise<void> => {
		const { username_input, comment_textarea } = data;
		const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/comments/add`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				body: comment_textarea,
				postId: postId,
				userId: userId,
			}),
		});
		if (!response.ok) {
			throw new Error('Failed to fetch posts');
		}
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<div className={styles.fields}>
				<Input
					{...register('username_input', {
						required: 'Username is required',
						maxLength: {
							value: 30,
							message: 'Username cannot exceed 30 characters',
						},
					})}
					name="username_input"
					placeholder="Username"
				/>
				{errors.username_input && (
					<p>
						{typeof errors.username_input.message === 'string' ? errors.username_input.message : ''}
					</p>
				)}
				<TextArea
					{...register('comment_textarea', {
						required: 'Comment is required',
						minLength: {
							value: 5,
							message: 'Comment must be at least 5 characters long',
						},
					})}
					name="comment_textarea"
					placeholder="Comment"
				/>
				{errors.comment_textarea && (
					<p>
						{typeof errors.comment_textarea.message === 'string'
							? errors.comment_textarea.message
							: ''}
					</p>
				)}
			</div>
			<FormButton />
		</form>
	);
}
