import React from "react";
import MyComponent from "./MyComponent"
import Student from "./Student"

function App() {
    return (
        <div>
            <MyComponent />
            <Student name="Chika" age="22" isStudent={true} />
            <Student name="Jennie" age="27" isStudent={true} />
            <Student name="Oma" age="23" isStudent={false} />
        </div>
    )

}



export default App;
