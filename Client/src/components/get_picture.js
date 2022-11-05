import React, {useEffect} from "react";
import axios from "axios";
import "./image.css"


const Get_Picture = () => {
    const [picture, setPicture] = React.useState("");
    async function get_pic() {
        axios.post('http://localhost:5001/get_picture', {
            "Picture": "Send Picture",
        }).then((response) => {
            // console.log(response.data)
            setPicture(response.data)
        }, (error) => {
            console.log(error);
        });
    }

    async function get_click(event) {
        let x = event.clientX
        let y = event.clientY
        console.log(x)
        console.log(y)

        axios.post('http://localhost:5001/send_coordinates', {
            "X": x,
            "Y": y,
        }).then((response) => {
            console.log(response.data)
        }, (error) => {
            console.log(error);
        });
    }

    const render_picture = () => {
        if (picture !== "") {
            console.log(picture.Image[0])
            return(
                <div>
                    <img class="center-fit" src={picture.Image[0]} alt="Picture" onClick={get_click}/>
                </div>
            )
        } else {
            get_pic()
        }
    }

    // useEffect(() => {
    //     const timer = setInterval(() => get_pic(), 1000);
    //     return () => clearInterval(timer);
    // },[]);

    return(
        <div>
            {render_picture()}
        </div>
    )
}

export default Get_Picture;