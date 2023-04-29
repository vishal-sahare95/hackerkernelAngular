export interface Jsonproduct {
    id:number|undefined,
    name:string,
    price:number,
    quantity:number,
}
 export class JsonproductC implements Jsonproduct{
    id:number|undefined;
    name:string;
    price:number;
    quantity:number;
    constructor(obj?:Jsonproduct){
        this.name=obj && obj.name || '',
        this.price=obj && obj.price ||0
        this.quantity=obj && obj.quantity ||0
    }
}