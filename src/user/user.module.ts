import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma.service';
import { UserResolver } from './user.resolvers';
import { OrganizationModule } from 'src/organization/organization.module';

@Module({
    providers: [UserResolver, UserService, PrismaService],
    imports: [OrganizationModule],
})
export class UserModule {}
