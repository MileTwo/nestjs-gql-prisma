export const config = () => ({
    app: {
        // host: process.env.HOST,
        port: parseInt(process.env.APP_PORT || '9000'),
        authServerUrl: process.env.KEYCLOAK_AUTH_SERVER_URL,
        realm: process.env.KEYCLOAK_REALM,
        clientId: process.env.KEYCLOAK_RESOURCE,
    },
    // database: {},
});
