import { User } from "./user";


export interface Restaurant {
    idRestaurant?: number;
    description: string;
    categorie: string;
    email: string;
    adresse: string;
    active: boolean;
    user:User;
    
}
