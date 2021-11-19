export const config = () => ({
    app: {
        // host: process.env.HOST,
        port: parseInt(process.env.APP_PORT || '5000'),
    },
    // database: {},
});
