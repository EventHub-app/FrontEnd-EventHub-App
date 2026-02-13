export interface ButtonType {
    text: string,
    Onclick: React.MouseEventHandler<HTMLButtonElement> | undefined,
    Onsubmit?: React.FormEventHandler<HTMLButtonElement> | undefined,
    type: "submit" | "reset" | "button" | undefined,
    className: string
}