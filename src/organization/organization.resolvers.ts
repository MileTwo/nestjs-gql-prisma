import { Resolver, Query, Args } from '@nestjs/graphql';
import { OrganizationService } from './Organization.service';

@Resolver('Organization')
export class OrganizationResolver {
    constructor(private readonly organizationService: OrganizationService) {}

    @Query('organizations')
    async Organizations() {
        return this.organizationService.Organizations();
    }

    @Query('organization')
    async Organization(@Args('id') args: string) {
        return this.organizationService.Organization(args);
    }
}
