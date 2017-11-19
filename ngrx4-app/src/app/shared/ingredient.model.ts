export class Ingredient {
    public name : string
    public amount : number
    constructor(name : string , amount : number) {
        this.name = name;
        this.amount = amount
    }
}
// /*Typescript trick:No need to declare property separately and initilize in constructor,  */
// export class Ingredient {
//     constructor( public name : string ,public amount : number) {       
//     }
// }
