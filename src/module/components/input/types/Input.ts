
export interface inputType {
    type: string,
    placeholder: string,
    name: string,
    onchage: React.ChangeEventHandler<HTMLInputElement> | undefined,
    className: string,
    required: boolean,
    value?: string
}