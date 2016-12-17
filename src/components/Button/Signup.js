import React from 'react'
const axios = require('axios')

function signupRequest() {
    axios.post('/signup')
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.log(error)
    })
}

class Signup extends React.Component {
    render() {
        return (
            <div>
                <button onClick={signupRequest}>Signup</button>
            </div>
        )
    }
}

export default Signup