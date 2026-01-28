
export interface User {
    name: string,
    id?: string,
    address: string,
    email: string
}

export interface Service {
    start_from: string,
    eventsCompleted: string,
    expirienceYears: string,
    imagePath: string,
    id?: string,
    user:User
}