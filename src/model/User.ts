export default interface User {
    id: number,
    name: string,
    email: string
};

export class UserClass implements User {
    id: number;
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

}