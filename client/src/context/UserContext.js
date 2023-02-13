import {React, createContext, useState, useContext} from 'react';
import axios from 'axios';

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext)
}

export const UserProvider = ({children}) => {
    const [user, setUser] = useState();

    const [information, setInformation] = useState({})

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

    const CreateAccount = async (firstName, lastName, email, password) => {
        const data = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            ...information,
        };
       // console.log(data)
        try {
            const response = await instance.post("/user/register", data, config);
           // console.log(response.data)
            setUser(response.data)
            return response.data._id
        } catch (error) {
            //console.log(error);
            console.log("Error in creating account");
        }
        //console.log(user)
        // return response.data._id
    };

    const Login = async (email, password) => {
        const data = {
            "email": email,
            "password": password
        };
       // console.log(data+ "login context")
        try {
            const response = await instance.post("/user/login", data, config);
        //    console.log(response.data+"context login body")
            if (response.data)
            {
                setUser(response.data)
                return response.data._id
            }
        } 
        catch (error) {
            console.log("Error in loggining in");
        }
    };


    const getAllUsers = async (id) => {
        try {
            const response = await instance.get(`/user/users/${"43"}`, id);
            //console.log(response.data);
        } catch (error) {
            //console.log(error.message);
            console.log("Error in getting users");
        }
    }

    const signOut = () => {
        try{
            setUser()
            setRoutine()
            setInformation()
            setWeekDays()
        }
        catch(e){
            console.log("Could not sign out")
        }
    }

    const EditInformation = async (id, skinType, skinConcern) => {
       // console.log(id)
        try{
            const response = await instance.patch("/user/updateInformation", {"id": id, "skinType": skinType, "skinConcern": skinConcern} ,config);
           // console.log(response.data)
            setUser(response.data)
            return information

        }
        catch(e){
            console.log("Error in editing information");
        }
    }

    const addReview = async (comment, stars, item) => {
        const data = {
            "user": user._id,
            "item": item,
            "comment": comment,
            "stars": stars
        };

        // console.log(item)
       // console.log(data+ "login context")
        try {
            const response = await instance.post("/review/addReview", data, config);
        } 
        catch (error) {
            console.log("Error in adding a review");
        }
    };

    const getReviews = async (item) => {
        // console.log(item)
        try {
            const response = await instance.post("/review/getReviews", {"item": item}, config);
            // console.log(response.data)
            return response.data
        } 
        catch (error) {
            console.log("Error in getting reviews");
        }
    };

    return(
        <UserContext.Provider
        value={{
            CreateAccount,
            getAllUsers,
            setInformation,
            information,
            Login,
            user,
            signOut,
            EditInformation,
            addReview,
            getReviews
        }}
        >
        {children}
    </UserContext.Provider>
    );
} 