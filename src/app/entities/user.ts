import { Cart } from "./cart";

export interface User {
    name: string;
    password: string;
    isAdmin: boolean;
    card: Cart[];
}