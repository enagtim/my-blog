import styles from './FormButton.module.css';
export default function FormButton() {
	return (
		<button aria-label="Send comment" className={styles.button}>
			Send
		</button>
	);
}
