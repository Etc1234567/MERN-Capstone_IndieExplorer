import {model, Schema} from 'mongoose';

const ArtistSchema = new Schema(
    {
        url: {
            type: String,
            required: [true, "Spotify URL is required!"],
            minlength: [11, "URL must be more than 11 characters."],
        },
        description:{
            type: String,
            required: [true, "Description is required!"],
            minlength: [10, "Description must be at least 10 characters long."]
        },
        instagram: {
            type: String
        },
        youtube: {
            type: String
        },
        facebook: {
            type: String
        },
        linktree: {
            type: String
        },
        spotifyID: {
            type: String
        }
    
    },
);

const Artist = model("Artist", ArtistSchema);
export default Artist;