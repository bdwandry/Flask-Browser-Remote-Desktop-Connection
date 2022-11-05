import React, {useRef, useEffect, useState} from "react";
import axios from "axios";
import "./image.css"


const Get_Picture = () => {
    const [picture, setPicture] = React.useState("");

    useEffect(() => {
        const timer = setInterval(() => get_pic(), 1000);
        return () => clearInterval(timer);
    },[]);

    async function get_pic() {
        axios.post('http://localhost:5000/get_picture', {
        "Picture": "Send Picture",
        }).then((response) => {
        // console.log(response.data)
        setPicture(response.data)
        }, (error) => {
            console.log(error);
        });
    }

    const imageRef = useRef(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        if (imageRef.current !== null) {
            setWidth(imageRef.current.width);
            setHeight(imageRef.current.height);
        }
    }, [imageRef.current?.width, imageRef.current?.height]);

    async function get_click(event) {
        if (imageRef.current !== null) {
            setWidth(imageRef.current.width);
            setHeight(imageRef.current.height);
            let x = (event.clientX / width)
            let y = (event.clientY / height)
            console.log(x)
            console.log(y)
            console.log(width)
            console.log(height)

            axios.post('http://localhost:5000/send_coordinates', {
                "X": x,
                "Y": y,
            }).then((response) => {
                console.log(response.data)
            }, (error) => {
                console.log(error);
            });
        }
    }

    const render_picture = () => {
        if (picture !== "") {
        console.log(picture.Image[0])
        return(
            <div>
                <img class="center-fit" src={picture.Image[0]} alt="Picture" onClick={get_click} ref={imageRef}/>
            </div>
        )
    } else {
        get_pic()
        }
    }

    return(
        <div>
            {render_picture()}
        </div>
    )
}

export default Get_Picture;