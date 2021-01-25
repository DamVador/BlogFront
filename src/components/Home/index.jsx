import React, { useState, useEffect } from 'react';

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
    
    
    return (
        <div>
            pouet
        </div>
    );
}

export default Home