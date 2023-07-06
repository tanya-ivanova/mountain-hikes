export interface Post {
    _id: String;
    name: String;
    mountain: String;
    country: String;
    duration: String;
    description: String;
    latitude: String;
    longitude: String;
    photos: String[];
    likes: String[];
    _ownerId: {
        email: String;
    };
}
