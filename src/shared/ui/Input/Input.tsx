import styles from './Input.module.css';
import { forwardRef, InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
	return <input aria-label="Input username" ref={ref} className={styles.input} {...props} />;
});
export default Input;
