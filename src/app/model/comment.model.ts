import { Restaurant } from "./restaurant.model";
import { User } from "./user";


export interface Comment {
    idEvaluation:string;
    commentaire: string;
    noteEtoile:number;
    user: User; 
    restaurant: Restaurant;

}
