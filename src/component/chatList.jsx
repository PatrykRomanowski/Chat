import React, { useState } from 'react';
import axios from 'axios'
import {URL} from '../consts/firebase'


// axios.get(URL)
//    .then(response => console.log(response.data))
//    .catch(response => console.log(response))

// axios.post(URL, {
//     axios: 'nowy post'
// })

const ChatList = props => {
    const [number, setNumber] = useState(0)

    return (
        <div>
            <p>{number}</p>
            <button
                onClick={() => setNumber(number + 1)}
            >+</button>
        </div>
    )
}

export default ChatList