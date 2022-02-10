import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { config } from './config/config';
import { OrganizationModule } from './organization/organization.module';
import { UserModule } from './user/user.module';
import {
    KeycloakConnectModule,
    ResourceGuard,
    RoleGuard,
    AuthGuard,
    PolicyEnforcementMode,
    TokenValidation,
} from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';
import { KeycloakConfigService } from './KeycloakConfigService';
@Module({
    imports: [
        UserModule,
        OrganizationModule,
        ConfigModule.forRoot({
            isGlobal: true,
            load: [config],
        }),
        GraphQLModule.forRoot({
            path: 'api',
            typePaths: ['./**/*.graphql'],
        }),
        // KeycloakConnectModule.registerAsync({
        //     useExisting: KeycloakConfigService,
        //     imports: [ConfigModule],
        // }),
        KeycloakConnectModule.register({
            authServerUrl: 'https://keycloak.afwerx.mile-two.com/auth',
            realm: 'TechSuite-edge',
            clientId: 'techsuite-identity-api',
            resource: 'techsuite-identity-api',
            secret: 'secret',
            bearerOnly: true,
            'confidential-port': '0',
            'ssl-required': 'none',
            policyEnforcement: PolicyEnforcementMode.PERMISSIVE,
            tokenValidation: TokenValidation.OFFLINE,
        }),
        // KeycloakConnectModule.register(`./keycloak.json`, {
        //     policyEnforcement: PolicyEnforcementMode.PERMISSIVE,
        //     tokenValidation: TokenValidation.ONLINE, // or none
        // }),
    ],
    controllers: [AppController],
    providers: [
        // This adds a global level authentication guard,
        // you can also have it scoped
        // if you like.
        //
        // Will return a 401 unauthorized when it is unable to
        // verify the JWT token or Bearer header is missing.
        {
            provide: APP_GUARD,
            useClass: AuthGuard,
        },
        // This adds a global level resource guard, which is permissive.
        // Only controllers annotated with @Resource and
        // methods with @Scopes
        // are handled by this guard.
        {
            provide: APP_GUARD,
            useClass: ResourceGuard,
        },
    ],
})
export class AppModule {}
