import React from 'react'
const axios = require('axios')

class Signup extends React.Component {
    signupRequest() {
        axios.post('/signup')
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
                <button onClick={this.signupRequest}>Signup</button>
            </div>
        )
    }
}

export default Signup