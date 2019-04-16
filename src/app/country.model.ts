import { User } from './user.model';

export class Country {
    id: number;
    name: string;
    flag: string;
    area: number;
    population: number;
    user: User;
}
