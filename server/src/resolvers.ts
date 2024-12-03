
import { Resolvers } from './types';

export const resolvers : Resolvers = {
    Query : {
        // returns an array of Tracks that will be uses to populate
        tracksForHome : (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome();
        }
    },

    // Instead, let's add another resolver specifically for a track's author. 
    // To do this, we'll add another key to our resolvers object called Track, 
    // indicating that it's for the Track type in our schema.
    Track : {
        author : ({ authorId }, _, { dataSources })=> {
            return dataSources.trackAPI.getAuthor(authorId);
        }
    }
}

