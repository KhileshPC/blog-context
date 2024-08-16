import { createContext, useState } from "react";



export const AppContext = createContext;

function AppContextProvider({children}){
    const [loading, setLaoding] = useState(false);
    const [page, setPage] = useState(1);
    const [post,setPost] = useState([]);
    const [totalPages, setTotalPages] = useState(null);

    const value = {
        laoding,
        setLaoding,
        page,
        setPage,
        post,
        setPost,
        totalPages,
        setTotalPages
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}