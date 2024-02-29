import styles from "./Message.module.scss"

export default function Message(props) {
    return (
        <div className={styles.message}>
            <div className={styles.text}>{props.message.text}</div>
            <div className={styles.author}>{props.message.author}</div>
        </div>
    )
}