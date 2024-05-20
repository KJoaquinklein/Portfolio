export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                coloranim: "coloranimation 2s infinite",
            },
            colors: {
                orange: {
                    0: "#C1625E",
                },
                blue: {
                    0: "#008DA1",
                },
                black: {
                    0: "#050609",
                },
                white: {
                    0: "#FEFEFF",
                },
            },
            fontFamily: {
                port: ["Montserrat"],
            },
        },
        screens: {
            mv: "100px",
            sm: "670px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
    plugins: [],
};
