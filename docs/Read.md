
```js

const [dataSource, setDatasource] = useState([
    {
        key: 1,
        name: 'Arnold',
        age: 25
    }
])

const read = {
    syncData: async () => {
        try{
            const response = await fetch('an-api.com')

            setDataSource(response.data)
        }catch(error){
        }
    },
    dataSource: dataSource,
    columns: [
        {
            type: 'Default',
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            type: 'Custom',
            title: 'Message',
            key: 'message',
            render: (_,record) => {
                (<h1>My name is {record.name} and I'm {record.age}</h1>)
            }
        }
    ]
}
```