import {React, createContext, useState, useContext} from 'react';
import axios from 'axios';
import { useUserContext } from './UserContext';
import { PORT } from '@env';

const ShelfContext = createContext();

export const useShelfContext = () => {
    return useContext(ShelfContext)
}

export const ShelfProvider = ({children}) => {
    const {user} = useUserContext()

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    const instance = axios.create({
        baseURL: PORT
        
    })

      

    const getShelf = async () => {
        // const data = {
        //     "id": user._id
        // };
        // console.log(user._id)
        try{
            const response = await instance.get(`/shelf/getShelf/${user._id}`, config);
            return response.data
        }
        catch(e){
            console.log("Error in getting shelf");
        }
    }

    const addToShelf = async (item) => {
        const data = {
            "id": user._id,
            "item": item
        };
        // console.log(item)
        try{
            const response = await instance.patch("/shelf/addToShelf", data, config);
            return response.data
        }
        catch(e){
            console.log("Error in getting shelf");
        }
    }
    
    const createShelf = async (id, routine) => {
        try{
            const response = await instance.post("/shelf/createShelf", {id, routine}, config);
            return response.data
        }
        catch(e){
            console.log("Error in creating shelf");
        }
    }

    const deleteItemInShelf = async (item) => {
         const data = {
            "id": user._id,
            "item": item
        };
        try{
            const response = await instance.delete("/shelf/deleteItemInShelf", {data: data}, config);
            return response.data
        }
        catch(e){
            console.log("Error in deleting shelf");
        }
    }

    return(
        <ShelfContext.Provider
        value={{
            getShelf,
            createShelf,
            addToShelf,
            deleteItemInShelf
        }}
        >
        {children}
    </ShelfContext.Provider>
    );


}