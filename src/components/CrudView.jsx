import { useState } from "react"
import { CreateFormButton } from "./CreateFormButton"
import ReadTable from "./ReadTable"

export function CrudView({
    crudName,
    title,
    creation,
    read,
    deletion,
    update
}){

    const [autoRefresh, setAutoRefresh] = useState(0)

    const refresh = () => {
        setAutoRefresh(autoRefresh++)
    }

    return(
        <>
            <h1>{title}</h1>
            <CreateFormButton
                crudName={crudName}
                creation={creation}
                refresh={refresh}
            />
            <ReadTable
                read={read}
                update={update}
                deletion={deletion}
                autoRefresh={autoRefresh}
            />
        </>
    )
}