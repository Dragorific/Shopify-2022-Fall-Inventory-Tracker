import React from 'react';
import '../CSS/Login.css';



function Login(){
    const [user, setUser] = React.useState("");
    const [pass, setPass] = React.useState("");

    const submitForm = (event) => {
        event.preventDefault();

        console.log(user)
        console.log(pass)
    }

    return(
        <div>
            <div class = "pt-5">
                <h1>
                    Inventory Management App    
                </h1>    
            </div>
            <form onSubmit={submitForm}>
                <div class="w-50 pt-5 mx-auto">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" value={user} onChange = {(e) => setUser(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" value={pass} onChange = {(e) => setPass(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login;