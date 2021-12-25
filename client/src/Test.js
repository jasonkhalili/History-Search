import { useEffect } from 'react';

const Test = (props) => {

    useEffect(() => {
        console.log(props);
    }, [])

    return (
        <div></div>
    )
}

export default Test;
