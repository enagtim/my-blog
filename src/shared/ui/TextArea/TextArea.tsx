import { forwardRef, TextareaHTMLAttributes } from 'react';
import styles from './TextArea.module.css';

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	({ ...props }: TextAreaProps, ref) => {
		return (
			<textarea aria-label="Text aria comment" ref={ref} className={styles.textarea} {...props} />
		);
	},
);
export default TextArea;
