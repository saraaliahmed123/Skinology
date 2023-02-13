import {React, createContext, useState, useContext} from 'react';
import axios from 'axios';

const SearchContext = createContext();

export const useSearchContext = () => {
    return useContext(SearchContext)
}

export const SearchProvider = ({children}) => {

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

    const getProduct = async (name) => {
        try{
            const response = await instance.get(`/search/getProduct/${name}`, config);
            return response.data
        }
        catch(e){
            console.log("Error in getting products");
        }
    }

    const getCleansers = async () => {
       try{
           const response = await instance.get("/search/getCleansers", config);
           return response.data
       }
       catch(e){
           console.log("Error in getting products");
       }
   }

   const getToners = async () => {
       try{
           const response = await instance.get("/search/getToners", config);
           return response.data
       }
       catch(e){
           console.log("Error in getting products");
       }
   }

   const getSerums = async () => {
       try{
           const response = await instance.get("/search/getSerums", config);
           return response.data
       }
       catch(e){
           console.log("Error in getting products");
       }
   }

   const getMoisturizers = async () => {
       try{
           const response = await instance.get("/search/getMoisturizers", config);
           return response.data
       }
       catch(e){
           console.log("Error in getting products");
       }
   }

   const getSuncreams = async () => {
       try{
           const response = await instance.get("/search/getSuncreams", config);
           return response.data
       }
       catch(e){
           console.log("Error in getting products");
       }
   }

   return(
        <SearchContext.Provider
        value={{
            getProduct,
            getCleansers,
            getToners,
            getSerums,
            getMoisturizers,
            getSuncreams
        }}
        >
            {children}
        </SearchContext.Provider>
    );

}