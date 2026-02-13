import React from 'react'
import type { ButtonType } from './types/Button'

export default function Button(params: ButtonType) {
    const { text, type, Onclick, Onsubmit, className } = params
    return (
        <div>
            <button
                className={className}
                onClick={Onclick}
                onSubmit={Onsubmit}
                type={type}
            >{text}</button>
        </div>
    )
}
