import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema : "./src/schema.ts",
    generates: {
        "./src/types.ts": {
            plugins: ["typescript", "typescript-resolvers"],
            config: {
                contextType: "./context#DataSourceContext",

                // Track doesn't contain "authorId" field, so we need mapper to resolve it
                mappers: {
                    Track: "./models#TrackModel",
                    Author: "./models#AuthorModel"
                },
            },
        },
    },
};

export default config;