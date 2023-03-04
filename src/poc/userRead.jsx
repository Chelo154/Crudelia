import { useState } from "react"

export function UserRead() {
    const [dataSource, setDatasource] = useState([
        {
            key: 1,
            name: 'Arnold',
            age: 25
        }
    ])

    const render = (_, record) =>
        (<>My name is {record.name} and I'm {record.age}</>)

    return {
        dataSource: dataSource,
        columns: [
            {
                type: 'Default',
                title: 'Name',
                dataIndex: 'name',
                key: 'name'
            },
            {
                type: 'Default',
                title: 'Age',
                dataIndex: 'age',
                key: 'age'
            },
            {
                type: 'Custom',
                title: 'Message',
                key: 'message',
                render: render
            }
        ]
    }
}