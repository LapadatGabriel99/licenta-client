import React from 'react'
import '../../styles/UserHub.css'

function UserHub() {
    return (
        <div className="container bg-dark text-light p-5 main-text-area drop-shadow">
            <div className="container bg-dark p-5">
                <h1 className="display-4">Welcome to demo app</h1>
                <p className="lead">This is the user-hub of our application. You can access it only if you have signed in.</p>
                <hr className="my-4"/>
                <p className="h4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p className="lead">
                    <a href="#" className="btn btn-success btn-lg">Lorem Ipsum is simply dummy text</a> 
                </p>
            </div>
        </div>
    )
}

export default UserHub
