# Creation

In order to make the creation view of your project successfull what do you have to do is give an
object with the defined values

```js

const [name, setName] = useState('')
const [age, setAge] = useState(0)

const onCreation = () => {
    //Code to fetch the backend\
}

const creation = {    
    fields: [
        {
            label: "name",
            name: "name",
            rules: [{ required: true, message: 'Please input the name of the user' }],
            setValue: setName
        },
        {
            label: "age",
            name: "age",
            rules: [{ required: true, message: 'Please input the age of the user' }]
            setValue: setAge
        }
    ],
    success: {
        messsage: 'User created',
        description: 'The user was successfully created'
    },
    error: {
        message: 'User creation failed',
        description: 'There was an error while creating the user'
    }

}
```