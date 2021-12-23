import { ChangeEvent, useState } from "react"

export const useForm = <T>(initialState: T) => {

    const [formData, setFormData] = useState(initialState)

    /**
     * Method that changes the formData and inserts the field in the input
     * @param event the element of input
     */
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    /**
     * Method to reset the form
     */
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