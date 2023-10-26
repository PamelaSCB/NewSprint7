import { useEffect, useState } from "react";
import { fetApi } from "../api/fechtApi";


export const useFetchApi = (url, page) => {

    const [shipsData, setShipsData] = useState( []);
    const [shipDataError, setShipDataError] = useState()
    
    useEffect(() => {
        fetApi(url, page, setShipsData, setShipDataError)
    }, [page])
    return {
       shipsData,
       shipDataError, 
    }
}
