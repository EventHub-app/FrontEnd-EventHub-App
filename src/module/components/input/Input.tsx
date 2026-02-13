import type { inputType } from './types/Input'

export default function Input(params: inputType) {
    const { type, onchage, name, placeholder, className, required,value } = params
    return (
        <div>
            <input
                required={required}
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={onchage}
                className={className}
                value={value}
            />
        </div>
    )
}
