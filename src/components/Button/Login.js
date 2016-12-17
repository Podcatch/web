import React from 'react'
const axios = require('axios')

class Login extends React.Component {
    loginRequest() {
        axios.post('/login')
            .then(function(response) {
                console.log(response)
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.loginRequest}>Login</button>
            </div>
        )
    }
}

export default Login