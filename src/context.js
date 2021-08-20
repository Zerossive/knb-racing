import React, { useContext, useEffect, useState } from "react";
import { client } from "./client";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [generalData, setGeneralData] = useState({});
    useEffect(() => {
        client
            .getEntries({
                content_type: "general",
            })
            .then((response) => {
                setGeneralData(response.items[0].fields);
            })
            .catch(console.error);
    }, []);
    return (
        <AppContext.Provider value={{ generalData }}>
            {children}
        </AppContext.Provider>
    );
};
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
