import { Typography } from "@mui/material";

const List = (props) => {

    if (props.events.length != 0) {
        return (
            <>
                {props.events.map((event) => {
                    return <div><Typography><strong>{event.date}</strong>: {event.description}</Typography></div>;
                })}
            </>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default List;