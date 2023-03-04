import {PlusCircleOutlined} from '@ant-design/icons';
import { Button } from 'antd';
import { useState } from 'react';
import { CreateForm } from './CreateForm';

export function CreateFormButton({crudName,creation, refresh}){

    const [openForm, setOpenCreateForm] = useState(false);

    return(
        <>
        <Button
        type="primary"
        icon=<PlusCircleOutlined />
        style={{ marginBottom: '1.5rem', float: "right" }}
        onClick={() => setOpenCreateForm(true)}>New</Button>
        <CreateForm
            name={crudName}
            creation={creation}
            openCreateForm={openForm}
            setOpenCreateForm={setOpenCreateForm}
            refresh={refresh}
        />
        </>
    )

}