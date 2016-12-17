import React from 'react'
const axios = require('axios')

function loginRequest() {
    axios.post('/login')
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.log(error)
    })
}

class Login extends React.Component {
    render() {
        return (
            <div>
                <button onClick={loginRequest}>Login</button>
            </div>
        )
    }
}

export default Login