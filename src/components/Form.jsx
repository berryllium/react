import { useState } from "react"
import { Button, Grid, TextField } from "@mui/material";

export default function Form({onSendMessage}) {
    const [fields, setFields] = useState({})

    const handleChange = (e) => {
        setFields(prevFields => ({
            ...prevFields,
            [e.target.name]: e.target.value
        }));
    }


    const submit = (e) => {
        e.preventDefault()
        onSendMessage(fields)
        setFields({})
    }

    return (
        <form onSubmit={submit}>
        <Grid spacing={2} container>
            <Grid item xs={12}>
            <TextField
                name="text"
                value={fields.text || ''}
                onChange={handleChange}
                label="Text"
                variant="outlined"
                style={{ width: '100%' }}
                rows={10}
                multiline
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                name="author"
                value={fields.author || ''}
                onChange={handleChange}
                label="Author"
                variant="outlined"
                style={{ width: '100%' }}
            />
            </Grid>
            <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
            </Grid>
        </Grid>
    </form>
    )
}