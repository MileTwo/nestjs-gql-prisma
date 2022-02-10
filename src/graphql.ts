
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Organization {
    id: string;
    name: string;
    users?: Nullable<Nullable<User>[]>;
}

export abstract class IQuery {
    abstract organizations(): Organization[] | Promise<Organization[]>;

    abstract organization(id: string): Nullable<Organization> | Promise<Nullable<Organization>>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;

    abstract authuser(): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: string;
    name: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    organization?: Nullable<Organization>;
}

type Nullable<T> = T | null;
