import React, { createContext, useContext, useEffect, useState } from "react";
import http from '../http';

const CommitteeContext = createContext();
export const useCommitteeContext = () => {
    return useContext(CommitteeContext)
}

export const CommitteeProvider = ({children}) => {
    const [committees, setCommittees] = useState('');


useEffect(() => {
    const readAllCommittees = async () => {
        const response = await http.get("/api/comittees")
        const responseArray = Object.values(response.data.data);
        setCommittees(responseArray)
    }
})
const value = {committees}
return (
    <CommitteeContext.Provider value={value}>
        {children}
        </CommitteeContext.Provider>
)
}