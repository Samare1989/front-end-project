export class Product {
    id : number;
    VendorId: number;
    partNumber: string;
    name : string;
    price : string;
    unit : string;
    photopath : string;
    active : boolean;


    constructor(VendorId: number,partNumber:string, 
        name:string, price: string,
        unit:string,photopath:string,active:boolean = false,
        ) {
            this.id = 0;
            this.VendorId = 0;
            this.partNumber = partNumber;
            this.name= name;
            this.price = '0';
            this.unit = "each";
            this.photopath = null;
            this.active = true;


        }

}