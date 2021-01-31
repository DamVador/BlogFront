import React, { useState, useEffect } from 'react';
import './index.css';
import image1 from './1.jpeg';

const Home = () => {
    const [data, setData] = useState([])
    
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
    
      const onMouseMove = (num) => {
          console.log(num)
            const cursor = document.querySelector(".cursor")
            //cursor.style.left = `${e.pageX}px`
            //cursor.style.top = `${e.pageY}px`
            cursor.style.backgroundColor = "green"
           // cursor.style.cursor = `url(src/assets/${num}.jpeg), auto`
           cursor.style.cursor = "url(./1.jpeg), auto"
            //cursor.style.cursor = 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/meh.png), auto'
            //cursor.style.cursor = "pointer"
        }
    
    return (
        <div className="cursor">
             {data.map(elt => <h1 className={`${elt.title[elt.title.length-1]}`} onMouseOver={() => onMouseMove(elt.title[elt.title.length-1])}>{elt.title}</h1>)}
             {console.log("laa")}
             {data.map(elt => console.log(elt.title[elt.title.length-1]))}
             <img src={image1} />
        </div>
    );
}

export default Home