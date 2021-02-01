import React, { useState, useEffect } from 'react';
import './index.css';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';

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

    const event = () => {
        const cursor = document.querySelector(".cursor2")
        document.addEventListener('click', () => {
            cursor.classList.add("expand");
            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })
    }

    useEffect(() => {
        homeFetch()
        event()
      }, [])

      useEffect(() => {
      }, [imageName])
    const tabImg = []
    tabImg.push(image1)
    tabImg.push(image2)
    tabImg.push(image3)
    tabImg.push(image4)

    const changeImage = (num) => {
        const cursor = document.querySelector(".cursor")
        console.log("DANS MOUSE OVER")
        console.log(num)
       // setImageName("image"+num)
        cursor.style.backgroundImage = `url(${tabImg[num-1]})`
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
                 {data.map(elt => <div className="inList" onMouseOver={() => changeImage(elt.title[elt.title.length-1])}><h1 className={`pouet${elt.title[elt.title.length-1]}`} >{elt.title}</h1></div>)}
             
             <div className="cursor2" style={{
                left: cursorX + 85 + "px",
                top: cursorY + 135 + "px"
            }}></div>
             <img src={image1} />
        </div>
    );
}

export default Home