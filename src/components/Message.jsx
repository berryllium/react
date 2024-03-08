import { Paper, Typography } from "@mui/material";

export default function Message(props) {
    return (
        <Paper elevation={3} style={{ padding: 10, marginBottom: 10 }}>
            <Typography variant="body1"><b>{props.message.text}</b></Typography>
            <Typography variant="body1">{props.message.author}</Typography>
        </Paper>
    )
}