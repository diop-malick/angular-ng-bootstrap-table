import {Country} from "./country.model";

export const COUNTRIES: Country[] = [
    {
        id: 1,
        name: 'Russia',
        flag: 'f/f3/Flag_of_Russia.svg',
        area: 17,
        population: 14,
        user: {
            firstName: 'malick',
            lastName: 'DIOP',
            address: {
                city : 'paris'
            }
        }
    },
    {
        id: 2,
        name: 'Canada',
        flag: 'c/cf/Flag_of_Canada.svg',
        area: 99,
        population: 36,
        user: {
            firstName: 'malick',
            lastName: 'DIOP',
            address: {
                city : 'paris'
            }
        }
    },
    {
        id: 3,
        name: 'United States',
        flag: 'a/a4/Flag_of_the_United_States.svg',
        area: 96,
        population: 32,
        user: {
            firstName: 'Louis',
            lastName: 'Diatta',
            address: {
                city : 'lille'
            }
        }
    },
    {
        id: 4,
        name: 'China',
        flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
        area: 95,
        population: 14,
        user: {
            firstName: 'Ben',
            lastName: 'Vers',
            address: {
                city : 'marseille'
            }
        }
    }
];
