import { render } from "@testing-library/react";
import { Button, Space, Table } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import Column from "antd/es/table/Column";
import { useEffect } from "react";

export default function ReadTable({read,update,deletion,autoRefresh}){

    const colums = read.columns

    const dataSource = read.dataSource

    return(
        <>
            <Table dataSource={dataSource}>
                {colums.map(column => {
                    if(column.type === 'Default'){
                        return (
                            <Column
                                title={column.title}
                                dataIndex={column.dataIndex}
                                key={column.key}
                            />
                        )
                    } else if (column.type === 'Custom'){
                        return(
                            <Column
                                title={column.title}
                                key={column.key}
                                render={column.render}
                            />
                        )
                    }
                    return null
                })}
                <Column title='Actions' key='actions' render={(_, record) => 
                    (<Space size='middle'>
                       <Button>Edit</Button>
                       <Button>Delete</Button>
                    </Space>)
                }/>
            </Table>
        </>
    )
}