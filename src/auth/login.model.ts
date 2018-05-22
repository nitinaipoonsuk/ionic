export interface Login {
    Username: string;
    Password: string;
    Remember: boolean;
}

export class LoginModel implements Login {
    public Username: string = '';
    public Password: string = '';
    public Remember: boolean = false;
}