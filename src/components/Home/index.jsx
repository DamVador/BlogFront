import React, { useState, useEffect } from 'react';
import './index.scss';
import Navbar from "../Navbar"
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';

const Home = () => {
    const [data, setData] = useState([])
    const [cursorX, setCursorX] = useState()
    const [cursorY, setCursorY] = useState()
    const [background, setBackground] = useState();
    const [isHovering, setIsHovering] = useState(false);
    const [previousDiv, setPreviousDiv] = useState();
    const [mouseMove, setMouseMove] = useState(false);
    
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
        var timer;
        var timeout = function () {
           document.querySelector(".cursor").style.transform = "rotateZ(0deg)";
        }
        timer = setTimeout(timeout, 250);
        window.onmousemove = function() {
            clearTimeout(timer);
            timer = setTimeout(timeout, 250);
        };
      }, [])


      useEffect(() => {
      }, [background])

    const tabImg = []
    tabImg.push(image1)
    tabImg.push(image2)
    tabImg.push(image3)
    tabImg.push(image4)

    const changeImage = (e, num) => {
        const cursor = document.querySelector(".cursor")
        console.log("DANS MOUSE OVER")
        //console.log(e.clientX, e.clientY)
       // setCurrentImage(tabImg[num-1])
       //cursor.style.backgroundImage = `url(${tabImg[num-1]})`
       setBackground(tabImg[num-1])
    }

    const handleMouseHover = (bool, num) => {
        const cursor = document.querySelector(".cursor");
        setIsHovering(bool)

        if(bool === true ){
            setBackground(tabImg[num-1]);
           const div =  document.querySelector(`.pouet${num}`);
           div.style.color = "red";
            setPreviousDiv(div)
            cursor.style.display = "block";
            //  cursor.style.zindex = "3";
            //  div.style.zindex = "4";
        } else {
            console.log(previousDiv)
            previousDiv.style.color = "black";
            cursor.style.display = "none";
        }
      };
   
    const mouseMoving =  (e) => {
        setMouseMove(true)
        const cursor = document.querySelector(".cursor");
        e.clientX - window.innerWidth/2 > 0 ? cursor.style.transform = "rotateZ(1deg)" : cursor.style.transform = "rotateZ(-1deg)"
        
    }

    return (
    <div className="page">
        <div className="nav"><Navbar/></div>
        <div className="container" >

           
            {/* {data.map(elt => <div className="inList" onMouseOver={() => changeImage( elt.title[elt.title.length-1])} ><h1 className={`pouet${elt.title[elt.title.length-1]}`} >{elt.title}</h1></div>)} */}
            {data.map(elt => 
            <div className="inList" onMouseEnter={() => handleMouseHover(true, elt.title[elt.title.length-1])}
                    onMouseLeave={() => handleMouseHover(false)} onMouseMove={mouseMoving}>
                        <h1 className={`pouet${elt.title[elt.title.length-1]}`}  ><div className="articleTitle">{elt.title}</div></h1>           
                </div>)}
        

            <div className="cursor" style={{
                opacity: 1,
                backgroundImage: `url(${background})`,
                left: cursorX + "px",
                top: cursorY + "px",
                display: "none"
            }} ></div>

             <div className="cursor2" style={{
                    left: cursorX + 85 + "px",
                    top: cursorY + 135 + "px",
                    }}>
            </div>
        </div>
    </div>
    );
}

export default Home

//brouillon 

{/* <div className="hover-reveal">
<div className="hover-reveal__inner">
        {isHovering === true && <div className="hover-reveal__img" ></div>}
</div>
</div>    */}