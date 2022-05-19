import axios from 'axios'


// fetch('https://chatapp-95ab1-default-rtdb.firebaseio.com/.json').then(response => {
//     console.log(response)
// })

axios.get('https://chatapp-95ab1-default-rtdb.firebaseio.com/.json').then(response => console.log(response))