export interface Product {
    id?:number| undefined,
    name: string,
    products: products[]
}
export class ProcductC implements Product {
    id?:number| undefined
    name: string;
    products: products[]
    constructor(obj?: Product) {
        this.name = obj && obj.name || '';
        this.products = obj && obj.products || [];

    }
}

interface products {
    pname: string,
    price: number,
    quantity: number
}
export class productsC implements products {
    pname: string;
    price: number;
    quantity: number
    constructor(pobj?: products) {
        this.pname = pobj && pobj.pname || '';
        this.price = pobj && pobj.price || 0;
        this.quantity = pobj && pobj.quantity || 0;

    }
}
