import { Comment } from "./Comment";

export interface Hike {
    _id: string;
    name: string;
    mountain: string;
    country: string;
    duration: string;
    description: string;
    latitude: string;
    longitude: string;
    photos: string[];
    likes: string[];
    comments: Comment[];
    _ownerId: {
        _id: string;
        email: string;
    };
}
