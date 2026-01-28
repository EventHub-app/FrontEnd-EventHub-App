

export class UserDomain {
    public id?: string
    public name: string
    public email: string
    public password?: string
    public address: string

    constructor(name: string, address: string, email: string, password?: string, id?: string) {
        this.address = address;
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = id;
    }

}