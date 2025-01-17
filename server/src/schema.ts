import gql from "graphql-tag";

export const typeDefs = gql`

    type Query {
        "Get tracks array for homepage grid"
        tracksForHome : [Track!]!
    }

    "A track is a group of modules that teaches about a specific topic"
    type Track {
        id : ID!

        "The track's title"
        title : String!

        "The track's main author"
        author : Author!

        "The track's main illustration to display in track card or track page detail"
        thumbnail : String

        "The track's approximate length to complete, in minutes"
        length : Int

        "The number of modules this track contains"
        modulesCount : Int
    }

    type Author {
        id : ID!

        "The author's first and last name"
        name : String!

        "The author's profile picture url"
        photo : String
    }
`;