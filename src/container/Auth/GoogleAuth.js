import React from 'react'

class GoogleAuth extends React.Component {
    state = { isSignedIn: false }
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '850264504608-095et897qmlonnlhuth261344l17t0te.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                // this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    // onAuthChange = (isSignedIn) => {
    //     console.log(this.state.isSignedIn)
    //     this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    //     if (isSignedIn) {
    //         // this.props.signIn(this.auth.currentUser.get().getId())

    //     }
    // }

    onSignIn(){
        this.auth.signIn()
        console.log(this.state.isSignedIn);
    }

    onSubmitHandler(e){
        e.preventDefault()
    }

    render() {
        return (
            <form className="help-btn" onSubmit={e=>this.onSubmitHandler(e)}>
                <div className="hr-login text-center float-left">
                    <span className="hr-label__text">or</span>
                </div>
                <button className="btn btn-danger" onClick={() => this.onSignIn()}>Login With Google</button>
            </form>
        )
    }
}

export default GoogleAuth


// import React from 'react'
// class GoogleAuth extends React.Component {
//     state = { isSignedIn: null }
//     componentDidMount() {
//         window.gapi.load('client:auth2', () => {
//             window.gapi.client.init({
//                 clientId: '1031898545531-9ddj8s16tp9rjb0ueocebh8o0kck0su5.apps.googleusercontent.com',
//                 scope: 'email'
//             }).then(() => {
//                 this.auth = window.gapi.auth2.getAuthInstance()
//                 this.onAuthChange(this.auth.isSignedIn.get())
//                 this.auth.isSignedIn.listen(this.onAuthChange)
//             })
//         })
//     }

//     // onAuthChange = (isSignedIn) => {
//     //     if (isSignedIn) {
//     //         this.props.signIn(this.auth.currentUser.get().getId())
//     //     } else {
//     //         this.props.signOut()
//     //     }
//     // }

//     onSignInClick = () => {
//         this.auth.signIn()
//     }
//     onSignOutClick = () => {
//         this.auth.signOut()
//     }

//     onAuthChange=()=>{
//         this.setState({isSignedIn:this.auth.isSignedIn.get()})
//     }

//     renderAuthButton() {
//         if (this.props.isSignedIn === null) {
//             return null
//         }
//         else if (this.props.isSignedIn) {
//             return (<button className="ui red google button" onClick={this.onSignOutClick}>
//                 <i className="google icon" />
//                 Sing Out
//             </button>)
//         } else {
//             return (<button className="ui green google button" onClick={this.onSignInClick}>
//                 <i className="icon google" />
//     Sing In with Google
//             </button>)
//         }
//     }
//     render() {
//         return (<div>{this.renderAuthButton()}</div>)
//     }
// }

// export default GoogleAuth