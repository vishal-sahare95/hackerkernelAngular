export interface Foods {
    name:string
}

export class FoodsC implements Foods{
    name:string
    constructor(obj:Foods){
this.name=obj && obj.name || ''
    }
}
