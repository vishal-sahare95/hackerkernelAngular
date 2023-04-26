export interface Login {
    email:string,
    password:string,
    token:string
}

export class LoginC implements Login{
    email:string;
    password:string;
    token:string
    constructor(obj:Login){
        this.email=obj && obj.email || ''
        this.password=obj && obj.password || ''
        this.token=obj && obj.token || ''

    }
}