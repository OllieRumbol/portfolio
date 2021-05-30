import React, { useState } from "react";

export const MyContext = React.createContext();

export default function MyProvider(props) {
    const [articles, setArticles] = useState([]);

    return (
        <MyContext.Provider value={{
            articles: articles,
            setArticles: setArticles
        }}>
            {props.children}
        </MyContext.Provider>
    )
}