import { Module } from '@nestjs/common';
import { OrganizationService } from './Organization.service';
import { PrismaService } from 'src/prisma.service';
import { OrganizationResolver } from './organization.resolvers';

@Module({
    providers: [OrganizationResolver, OrganizationService, PrismaService],
})
export class OrganizationModule {}
