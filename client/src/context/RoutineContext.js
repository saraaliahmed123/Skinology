import {React, createContext, useState, useContext} from 'react';
import axios from 'axios';
import { useUserContext } from './UserContext';

const RoutineContext = createContext();

export const useRoutineContext = () => {
    return useContext(RoutineContext)
}

export const RoutineProvider = ({children}) => {
    const {information} = useUserContext()

    const [routine, setRoutine] = useState()

    const [weekDays, setWeekDays] = useState()

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    const instance = axios.create({
        baseURL: 'http://192.168.1.25:3001'
        //Libary: baseURL: 'http://10.130.43.77:3001'
        //Picton: 
        //baseURL: 'http://10.130.43.153:3001'
        
    })

    const saveRoutine = async (userId) => {
        const data = {
            days: weekDays,
            userId: userId
        };
        //console.log(data)
        try {
            const response = await instance.post("/routine/saveRoutine", [data, routine[1]], config);
            return response.data
        } catch (error) {
            //console.log(error);
            console.log("Error in saving routine");
        }
    };

    const editRoutine = async (id, rout) => {
        // console.log(id+ "context id")
        // console.log(rout[0])
        try {
            const response = await instance.patch("/routine/editRoutine", {"id": rout[0], "routine": rout[1][1]}, config);
            return response.data
        } catch (error) {
            //console.log(error);
            console.log("Error in editing a routine");
        }
    }

    const getRoutine = async (id) => {
        // console.log(id+"hvhvli")
         try {
             const response = await instance.get(`/routine/getRoutine/${id}`, config);
            // console.log(responseRoutine.data[0])
             setRoutine(response.data[0])
             return response.data[0]
         } 
         catch (error) {
             console.log("Error in getting a routine");
         }
     };

     const createRoutine = async () => {
        // console.log(information)
        try {
            const response = await instance.post("/routine/createRoutine", information, config);
            // console.log(response.data)
            if (routine)
            {
                const id = routine._id
                setRoutine(response.data)
                return [id, response.data]
            }
            else
            {
                setRoutine(response.data)
                return response.data
            }
            
        } catch (error) {
            //console.log(error);
            console.log("Error in creating a routine");
        }
    };

    return(
        <RoutineContext.Provider
        value={{
            createRoutine,
            routine,
            setWeekDays,
            saveRoutine,
            getRoutine,
            editRoutine
        }}
        >
        {children}
    </RoutineContext.Provider>
    );



}