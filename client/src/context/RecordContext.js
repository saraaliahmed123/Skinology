import {React, createContext, useState, useContext} from 'react';
import axios from 'axios';
import { useUserContext } from './UserContext';
import { PORT } from '@env';

const RecordContext = createContext();

export const useRecordContext = () => {
    return useContext(RecordContext)
}

export const RecordProvider = ({children}) => {
    const {user} = useUserContext()

    const [images, setImages] = useState()

    const [todaysRecords, setTodaysRecords] = useState()
    const [records, setRecords] = useState()


    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    const instance = axios.create({
        baseURL: PORT
        
    })

    const CreateRecord = async (type, completed) => {
        const data = {
            "type" : type,
            "completed": completed,
            "id": user._id,
            "images": images,
        };
        // console.log(data)
        try {
        const response = await instance.post("/record/createRecord", data, config);
        //    console.log(response.data)
            if (todaysRecords)
            {
                setTodaysRecords((prev) => {
                    return [...prev, response.data]
                })
            }
            else
            {
                setTodaysRecords([response.data])
                setImages()
            }
            return response.data
        } catch (error) {
            console.log("Error in creating a record");
        }
    }

    const getTodaysRecords = async () => {
        // const data = {
        //     "id": user._id
        // };
        try{
            const response = await instance.get(`/record/getTodaysRecords/${user._id}` , config);
            // console.log(response.data)
            if (response?.data.length !== 0)
            {
                setTodaysRecords(response?.data)
            }
            return response?.data
        }
        catch(e){
            console.log("Couldnt get todays records")
        }
    }

    const getRecords = async () => {
        // const data = {
        //     "id": user._id
        // };


        try{
            const response = await instance.get(`/record/getRecords/${user._id}` , config);
           console.log(response.data)
            if (response?.data.length !== 0)
            {
                setRecords(response?.data)
            }
            return response?.data
        }
        catch(e){
            console.log("Couldnt get records")
        }
    }

    

    return(
        <RecordContext.Provider
        value={{
            setImages,
            images,
            CreateRecord,
            todaysRecords,
            getTodaysRecords,
            getRecords,
            records
        }}
        >
        {children}
    </RecordContext.Provider>
    );

}