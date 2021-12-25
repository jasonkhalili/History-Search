const List = (props) => {

    if (props.events.length != 0) {
        return (
            <>
                {props.events.map((event) => {
                    return <div>{event.date}: {event.description}</div>;
                })}
            </>
        )
    } else {
        return (
            <div>empty</div>
        )
    }
}

export default List;