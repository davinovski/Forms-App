export class Person {
    FirstName: string;
    LastName: string;
    ZipCode: string;
    movies: any[]=[];

    constructor();
    constructor(firstName: string, lastName : string, zipCode : string, movies : any[]);
    constructor(firstName: string="", lastName : string="", zipCode : string="", movies : any[]=[]){
        this.FirstName=firstName;
        this.LastName=lastName;
        this.ZipCode=zipCode;
        this.movies=movies;
    }
    
}