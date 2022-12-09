import { Card } from "./card";

export interface User {
    name: string;
    password: string;
    isAdmin: boolean;
    card: Card[];
}