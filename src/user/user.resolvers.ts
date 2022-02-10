import { ExecutionContext } from '@nestjs/common';
import { Resolver, Query, Args, Context, GqlExecutionContext } from '@nestjs/graphql';
import { AuthenticatedUser } from 'nest-keycloak-connect';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query('users')
    async users(@AuthenticatedUser() user) {
        console.log(user);
        return this.userService.getUsers();
    }

    @Query('user')
    async user(@Args('id') args: string) {
        return this.userService.getUser(args);
    }

    @Query('authuser')
    async authuser(@AuthenticatedUser() user) {
        const emailAddress =
            user.preferred_username === 'service-account-techscout-postman' ? 'testuser@testuser.com' : user.email;
        return this.userService.getUserByEmail(emailAddress);
    }
}
