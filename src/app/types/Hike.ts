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
    _ownerId: {
        email: string;
    };
}
