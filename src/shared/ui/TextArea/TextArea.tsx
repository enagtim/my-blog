import { forwardRef, TextareaHTMLAttributes } from 'react';
import styles from './TextArea.module.css';

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	({ ...props }: TextAreaProps, ref) => {
		return <textarea ref={ref} className={styles.textarea} {...props} />;
	},
);
export default TextArea;
