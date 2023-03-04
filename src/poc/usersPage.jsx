import { CrudView } from "../components/CrudView"
import { UserCreation } from "./userCreation"
import { UserRead } from "./userRead"

export function UsersPage(){
    const title = 'Users'
    
    const crudName = 'user'

    const creation = UserCreation()

    const read = UserRead()

    return(
    <>
    <CrudView
        crudName={crudName}
        title={title}
        creation={creation}
        read={read}
        update={null}
        deletion={null}

    />
    </>)
}