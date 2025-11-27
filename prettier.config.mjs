export default {
    printWidth: 120,
    tabWidth: 4,
    semi: true,
    bracketSpacing: true,
    arrowParens: "always",
    bracketSameLine: true,
    plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
    overrides: [
        {
            files: "*.svelte",
            options: {
                parser: "svelte",
            },
        },
    ],
};
