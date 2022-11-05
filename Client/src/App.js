import './App.css';
import React from "react";
import {Button} from "@mui/material";
import Get_Picture from "./components/get_picture";

function App() {
    const [start, setStart] = React.useState("");
    async function get_pic() {
        setStart("Start")
    }

    const start_picture = () => {
        if (start === "") {
            return (
                <div>
                    <Button variant="contained" onClick={get_pic}>Get Picture</Button>
                </div>
            )
        } else {
            return (
                <div>
                    <Get_Picture/>
                </div>
            )
        }
    }

    return (
        <div className="App">
            {start_picture()}
        </div>
    );
}

export default App;
