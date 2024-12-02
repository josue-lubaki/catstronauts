import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    // where the schema is
    schema: "http://localhost:4000",

    // consider all files in src/ when generating types
    documents: ["src/**/*.tsx"],
    
    // where to output all of the code that it generates.
    generates: {
        "./src/__generated__/": {
            // provides the additional plugins that we can tweak to modify how the Code Generator behaves.
            preset: "client",
            presetConfig : {
                gqlTagName: "gql",
            },
        },
        "./src/__generated__/types.ts": {
            plugins: ["typescript", "typescript-operations"],
        },
    },
    // ignoreNoDocuments: true,
};

export default config;