import React, { FunctionComponent, useState } from "react";
import { ContextType, Article } from "../type.d";

export const MyContext = React.createContext<ContextType | []>([]);

const MyProvider: FunctionComponent = (props) => {
    const [articles, setArticles] = useState<Article[]>([]);

    return (
        <MyContext.Provider value={{
            articles: articles,
            setArticles: setArticles
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyProvider