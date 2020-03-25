import { Person } from '../data/models/person.model';

let HristijanDavinovski: Person = new Person("Hristijan", "Davinovski", "1000", [{name: "The Gentlemen"},{name: "The Irishman"}]);
let AleksandarDimoski: Person = new Person("Aleksandar", "Dimoski", "6000", [{name: "Countdown"}]);
export let Users = [
    HristijanDavinovski,
    AleksandarDimoski
]