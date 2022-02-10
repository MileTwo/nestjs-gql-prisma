import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    // Get a single User
    async getUser(id: string): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: {
                id,
            },
            include: { organization: true },
        });
    }

    async getUserByEmail(emailAddress: string): Promise<User | null> {
        return this.prisma.user.findFirst({
            where: {
                emailAddress,
            },
            include: { organization: true },
        });
    }

    // Get multiple Users
    async getUsers(): Promise<User[]> {
        return this.prisma.user.findMany({ include: { organization: true } });
    }
}
