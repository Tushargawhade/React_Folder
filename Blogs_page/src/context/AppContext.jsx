import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl'


export const AppContext = createContext();

function AppContextProvider({children}){

    const [loading, setLoading] = useState(false);
    const [posts , setPosts] = useState([]);
    const [pages, setPages] =useState(1);
    const [totalpages, setTotalPages] = useState(null);  


    //data filling 

    async function fetchBlogPosts(page=1){

        setLoading(true);

        let url = `${baseUrl}?page=${page}`

        try{

            const result = await fetch(url);
            const data = await result.json();
            console.log(data)


        }
        catch(err){
            console.log("error in feting data!!");
        }


        setLoading(false);
    }


    




    return <AppContext.Provider value={value}>
               {children}
             </AppContext.Provider>;    
    

}
