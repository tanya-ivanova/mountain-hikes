import { Hike } from "./Hike";

export interface Comment {
    content: string;
    _ownerId: {
        _id: string;
        email: string;
    };
    _postId: Hike;
}