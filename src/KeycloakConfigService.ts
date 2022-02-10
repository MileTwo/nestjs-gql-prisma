import { Injectable } from '@nestjs/common';
import {
    KeycloakConnectOptions,
    KeycloakConnectOptionsFactory,
    PolicyEnforcementMode,
    TokenValidation,
} from 'nest-keycloak-connect';

@Injectable()
export class KeycloakConfigService implements KeycloakConnectOptionsFactory {
    createKeycloakConnectOptions(): KeycloakConnectOptions {
        return {
            authServerUrl: 'https://keycloak.afwerx.mile-two.com/auth',
            realm: 'TechSuite-edge',
            clientId: 'techsuite-identity-api',
            resource: 'techsuite-identity-api',
            secret: 'secret',
            bearerOnly: true,
            'confidential-port': '0',
            'ssl-required': 'none',
            policyEnforcement: PolicyEnforcementMode.PERMISSIVE,
            tokenValidation: TokenValidation.ONLINE,
        };
    }
}

// {
//     "realm": "TechSuite-edge",
//     "auth-server-url": "https://keycloak.afwerx.mile-two.com/auth",
//     "ssl-required": "external",
//     "resource": "techsuite-identity-api",
//     "confidential-port": 0

//     'confidential-port': parseInt(process.env.KEYCLOAK_CONFIDENTIAL_PORT || '0'),
//             'auth-server-url': process.env.KEYCLOAK_AUTH_SERVER_URL || '',
//             resource: process.env.KEYCLOAK_RESOURCE || 'techscout-api',
//             'ssl-required': process.env.KEYCLOAK_SSL_REQUIRED || 'none',
//             'bearer-only': true,
//             realm: process.env.KEYCLOAK_REALM || 'TechSuite',
// }
