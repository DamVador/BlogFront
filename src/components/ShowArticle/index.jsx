import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import './index.css';

const ShowArticle = () => {
    const [title, setTitle] = useState("pas de titre");
    const [content, setContent] = useState("pas de contenu");
    let {articleId} = useParams();

    const callFetch = () => {
        fetch(`http://localhost:3000/api/articles/${articleId}`, {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json"
        },
        })
        .then((response) => {
        return response.json()
        })
        .then((response) => {
             console.log(response);
            setTitle(response.title);
            setContent(response.content);
        }).catch(error => {
        console.log(error)
        })
    }

    useEffect(() => {
        console.log("dans le use effect")
        console.log(articleId)
        callFetch();
    }, [])


    return (
        <div className="showArticle">
            <h1 className="articleTitle" >{title}</h1>
            <p className="content">{content}</p>
        </div>
    );
}

export default ShowArticle