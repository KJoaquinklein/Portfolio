export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                black: {
                    0: "#2C2F3A",
                },
                green: {
                    0: "#7AE582",
                },
                purple: {
                    0: "#5E548E",
                },
                white: {
                    0: "#DFF3E4",
                },
            },
            fontFamily: {
                tech: ["Share Tech Mono", "monospace"],
            },
        },
        screens: {
            mv: "100px",
            sm: "670px",
            md: "780px",
            md2: "1000px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
    plugins: [],
};
