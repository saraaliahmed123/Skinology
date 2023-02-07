import {React, createContext, useState, useContext} from 'react';
import axios from 'axios';

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext)
}

export const UserProvider = ({children}) => {
    //const [user, setUser] = useState();

    const config = {
        headers: {
            // 'content-type': 'application/json',
            // 'Authorization': `JWT ${localStorage.getItem('access')}`,
            // 'Accept': 'application/json'
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    // const CreateAccount = async (firstName, lastName, email, password) => {
    // await axios.post('http://localhost:3001/Skinology/users/register', (firstName, lastName, email, password), config)
    // .then((response) => {
    //     console.log(response)
    // })
    // .catch((error) => {
    //     console.log(error+"ERROR")
    // })
    // }

    const instance = axios.create({
        baseURL: 'http://192.168.1.25:3001'
    })
    
    // const CreateAccount = async (firstName, lastName, email, password) => {
    //     const data = {
    //         firstName: firstName,
    //         lastName: lastName,
    //         email: email,
    //         password: password
    //     }
    //     await axios.post("http://localhost:3001/users/register/", data, config)
    //     .then((res) => {
    //         console.log(res)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //         console.log("HERE")
    //     })
    //     }

    const CreateAccount = async (firstName, lastName, email, password) => {
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };
        try {
            const response = await instance.post("/users/register", data, config);
            console.log(response.data);
        } catch (error) {
            console.log(error);
            console.log("Error in creating account");
        }
    };

    const getAllUsers = async () => {
        try {
            const response = await instance.get("/users/users", config);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    // const CreateAccount = (firstName, lastName, email, password) => {
    //      axios({
    //         method: 'POST',
    //         url: 'http://localhost:3001/users/register', 
    //         data: {
    //             firstName: firstName,
    //             lastName: lastName,
    //             email: email,
    //             password: password
    //         }
    //     })
    //     .then((response) => {
    //         //console.log(response.json())
    //         console.log(response)
    //         console.log("I HATE LIFE")
    //     })
    //     .catch((error) => {
    //         console.log(error.response.data+" HERE")
    //         console.log("SUP")
    //     })
    //     }
    

    return(
        <UserContext.Provider
        value={{
            CreateAccount,
            getAllUsers
        }}
        >
        {children}
    </UserContext.Provider>
    );
} 