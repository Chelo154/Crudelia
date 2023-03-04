import { Modal, Form, Input, notification } from "antd"

export function CreateForm({name,creation, openCreateForm, setOpenCreateForm, refresh}){

    const fields = creation.fields

    const onCreation = creation.onCreation

    const [creationNotification, contextHandler] = notification.useNotification()

    const handleOk = async () => {
        try {
            await onCreation()

            creationNotification['success']({
                message: creation.success.message,
                description: creation.success.description
            })
        } catch (error) {
            console.log(error)

            creationNotification['error']({
                message: creation.error.message,
                description: creation.error.description
            })
        }

        refresh()
        setOpenCreateForm(false)
        
    }

    return (
        <>
            {contextHandler}
    
            <Modal
                title={`New ${name}`}
                centered
                open={openCreateForm}
                onOk={() => handleOk()}
                onCancel={() => setOpenCreateForm(false)}
            >
                <Form
                    name={`new${name}From`}
                    initialValues={{ remember: false }}
                    autoComplete="off">

                    {fields.map(field => (
                        <Form.Item
                            label={field.label}
                            name={field.name}
                            rules={field.rules}
                        >
                            <Input onChange={event => field.setValue(event.target.value)}/>
                        </Form.Item>
                    ))}
                </Form>
    
            </Modal>
        </>
    )
}