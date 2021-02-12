import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";

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
            console.log(response)
        }).catch(error => {
        console.log(error)
        })
    }

    useEffect(() => {
        console.log(articleId)
        callFetch();
    }, [])


    return (
        <div>
            {title}
            {content}
        </div>
    );
}

export default ShowArticle