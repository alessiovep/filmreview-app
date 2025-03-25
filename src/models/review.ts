import type { Film } from "./film";
import type { User } from "./user";

export interface Review {
    id: number;
    movieId: number;
    userId: number;
    rating: number;
    comment: string;
    created_at: Date;
    updated_at: Date;
    film: Film;
    user: User;
}
