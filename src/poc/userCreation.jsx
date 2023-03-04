import { useState } from "react";

export function UserCreation(){
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [age,setAge] = useState('')

    const onCreation = () => {
        const data = {
            name: name,
            surname: surname,
            age: age
        }

        console.log(data)
    }

    return {    
        fields: [
            {
                label: "name",
                name: "name",
                rules: [{ required: true, message: 'Please input the name of the user' }],
                setValue: setName
            },
            {
                label: "surname",
                name: "surname",
                rules: [{ required: true, message: 'Please input the name of the user' }],
                setValue: setSurname
            },
            {
                label: "age",
                name: "age",
                rules: [{ required: true, message: 'Please input the age of the user' }],
                setValue: setAge
            }
        ],
        onCreation: onCreation,
        success: {
            message: 'User created',
            description: 'The user was successfully created'
        },
        error: {
            message: 'User creation failed',
            description: 'There was an error while creating the user'
        }
    
    }
}