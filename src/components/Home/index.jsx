import React, { useState, useEffect } from 'react';
import './index.css';
import image1 from './1.jpg';
import image2 from './2.jpg';

const Home = () => {
    const [data, setData] = useState([])
    const [cursorX, setCursorX] = useState()
    const [cursorY, setCursorY] = useState()
    const [imageName, setImageName] = useState()

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX - 100)
        setCursorY(e.pageY - 150)
    })

    const homeFetch = () => {
        fetch(`http://localhost:3000/api/articles`, {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json"
        },
        })
        .then((response) => {
        return response.json()
        })
        .then((response) => {
            console.log(response)
            setData(response)
            console.log('data updated')
            console.log(data)
            console.log(data[0].title)
        // const orderedResponse = response.data
        //     .sort((a, b) => (b.attributes.created_at).localeCompare((a.attributes.created_at)))
        // const cropData = orderedResponse.slice(0, 12)
        // setData(cropData)
        // console.log(data)
        }).catch(error => {
        console.log(error)
        })
    }

    useEffect(() => {
        homeFetch()
      }, [])

      useEffect(() => {
      }, [imageName])
    
    const changeImage = (num) => {
        console.log("DANS MOUSE OVER")
        console.log(num)
        setImageName("image"+num)
    }

    return (
        <div className="container" >
            <div className="cursor" style={{
                opacity: 0.5,
                zIndex: 5,
                backgroundImage: `url(${image2})`,
                left: cursorX + "px",
                top: cursorY + "px"
            }}></div>
            <ul style={{zIndex: 1}}>
                 {data.map(elt => <li><h1 className={`${elt.title[elt.title.length-1]}`} onMouseOver={() => changeImage(elt.title[elt.title.length-1])}>{elt.title}</h1></li>)}
             </ul>
            
             <img src={image1} />
        </div>
    );
}

export default Home