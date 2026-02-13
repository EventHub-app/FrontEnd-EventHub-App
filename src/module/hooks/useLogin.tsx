import React, { useState } from 'react'

export default function useLogin() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const handleChangfeValue = (event: any) => {
        const { name, value } = event.target
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }
    const Onsubmit = (event: any) => {
        event.preventDefault()
        console.log(formData)
    }
    return {
        handleChangfeValue,
        formData,
        Onsubmit
    }
}
