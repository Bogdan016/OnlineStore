// export class Product {
//     sku: string;
//     name: string;
//     description: string;
//     unitPrice: number;
//     imageURL: string;
//     active: boolean;
//     unitsInStock: number;
//     dateCreated: Date;
//     lastUpdated: Date;
// }
export class Product {
    id: string = '';
    sku: string = '';
    name: string = '';
    description: string = '';
    unitPrice: number = 0;
    imageURL: string = '';
    active: boolean = false;
    unitsInStock: number = 0;
    dateCreated: Date = new Date();
    lastUpdated: Date = new Date();
}