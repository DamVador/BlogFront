import React, { useState, useEffect } from 'react';
import './index.scss';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';

const Home = () => {
    const [data, setData] = useState([])
    const [cursorX, setCursorX] = useState()
    const [cursorY, setCursorY] = useState()
    const boxRef = React.useRef(null);
    const [background, setBackground] = useState();
    const [isHovering, setIsHovering] = useState(false);
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

    const onmouseout = () => {
        const cursor = document.querySelector(".cursor")
        cursor.style.display = "none";
    }

    const test = (bool) => {
        const div =  document.querySelector(".divtest");
        div.addEventListener("mousemove", (e) => {
            console.log(e.clientX)
            div.style.backgroundColor = "red";
        })
    }

    const mouseMove = (e) => {
        //console.log(e.clientX, e.clientY)
       // console.log(boxRef);
       const cursor = document.querySelector(".cursor")
        

    }

    const handleMouseHover = (bool, num) => {
        setIsHovering(bool)
        if(bool === true ){
            setBackground(tabImg[num-1]);
        }
      };
   

    return (
        <div className="container" onMouseMove={mouseMove} >
            <div className="cursor" style={{
                opacity: 1,
                backgroundImage: `url(${background})`,
                left: cursorX + "px",
                top: cursorY + "px"
            }}></div>

                 {/* {data.map(elt => <div className="inList" onMouseMove={(e) => changeImage(e, elt.title[elt.title.length-1])} ><h1 className={`pouet${elt.title[elt.title.length-1]}`} >{elt.title}</h1></div>)} */}
                 {data.map(elt => <div className="inList"  ref={boxRef} onMouseEnter={() => handleMouseHover(true, elt.title[elt.title.length-1])}
          onMouseLeave={() => handleMouseHover(false)} ><h1 className={`pouet${elt.title[elt.title.length-1]}`}  >{elt.title}</h1> <div className="hover-reveal">
        <div className="hover-reveal__inner">
            {isHovering === true && <div className="hover-reveal__img" style={{ backgroundImage: `url(${background})`}}></div>}
        </div>
    </div>   </div>)}
                 {/* {data.map(elt => <div className="inList" onMouseEnter={changeImage(true)} onMouseLeave={changeImage(false)}><h1 className={`pouet${elt.title[elt.title.length-1]}`} >{elt.title}</h1></div>)} */}
            <div className="divtest"  ><button >Test</button></div>
             <div className="cursor2" style={{
                left: cursorX + 85 + "px",
                top: cursorY + 135 + "px",
            }}></div>
             <img style={{display: "none"}} src={image1} />
        </div>
    );
}

export default Home