export interface IUser {
    id: number;
    name: string;
    email: string;
}

export interface ILogin{
    email: string;
    password: string;    
}

export interface ILoginResonse{
    message: string;
    token: string;
    accessToken: string;
    user: IUser;
}