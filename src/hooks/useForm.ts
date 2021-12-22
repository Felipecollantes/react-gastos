import { ChangeEvent, useState } from "react"

export const useForm = <T>(initialState: T) => {

    const [formData, setFormData] = useState(initialState)

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const resetForm = () => {
        setFormData({ ...initialState })
    }

    return {
        ...formData,
        // Properties
        formData,
        //Methods
        onChange,
        resetForm
    }
}