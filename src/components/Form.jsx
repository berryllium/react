import { useState } from "react"
import styles from "./Form.module.scss"

export default function Form({addMessage}) {
    const [fields, setFields] = useState({})

    const onFieldChange = (e) => {
        setFields(prevFields => ({
            ...prevFields,
            [e.target.name]: e.target.value
        }));
    }

    const submit = (e) => {
        e.preventDefault()
        addMessage(fields)
    }

    return (
        <form className={styles.form} onSubmit={submit}>
            <textarea name="text" placeholder="Type some text..." onChange={onFieldChange}></textarea>
            <input name="author" placeholder="Author" onChange={onFieldChange}></input>
            <button className="btn btn-warning">Send</button>
        </form>
    )
}