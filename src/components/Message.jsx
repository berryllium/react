import styles from "./Message.module.scss"

export default function Message(props) {
    return (
        <div className={styles.message}>
            <span className={styles.text}>{props.text}</span>
        </div>
    )
}