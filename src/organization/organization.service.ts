import { Injectable } from '@nestjs/common';
import { Organization } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrganizationService {
    constructor(private prisma: PrismaService) {}

    // Get a single Organization
    async Organization(id: string): Promise<Organization | null> {
        return this.prisma.organization.findUnique({
            where: {
                id,
            },
            include: { users: true },
        });
    }

    // Get multiple Organizations
    async Organizations(): Promise<Organization[]> {
        return this.prisma.organization.findMany({ include: { users: true } });
    }
}
