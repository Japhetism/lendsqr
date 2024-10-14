import { IInitialState } from "../interfaces/api";

export const defaultErrorMessage = "An unknown error occurred";

export const initialState: IInitialState = {
    responseData: null,
    status: "idle",
    error: null,
    isLoading: false,
}

type UserStatus = 'inactive' | 'pending' | 'active' | 'blacklisted';

export type User = {
    id: number;
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: UserStatus;
};

const generateUniquePhoneNumbers = (count: number): string[] => {
    const phoneNumbers = new Set<string>();
    const prefixes = ['080', '090', '070', '091'];

    while (phoneNumbers.size < count) {
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const number = `${prefix}${Math.floor(10000000 + Math.random() * 90000000)}`; // Generates a number with 8 digits
        phoneNumbers.add(number);
    }

    return Array.from(phoneNumbers);
};

const uniquePhoneNumbers = generateUniquePhoneNumbers(500);

const getRandomStatus = (): UserStatus => {
    const statuses: UserStatus[] = ['inactive', 'pending', 'active', 'blacklisted'];
    return statuses[Math.floor(Math.random() * statuses.length)];
};

const getRandomDateTime = (): string => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setFullYear(endDate.getFullYear() - 1);

    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    return randomDate.toISOString();
};

export const allUsers: User[] = Array.from({ length: 500 }, (_, id) => ({
    id: id + 1,
    organization: `Organization ${id + 1}`,
    username: `User${id + 1}`,
    email: `user${id + 1}@gmail.com`,
    phoneNumber: uniquePhoneNumbers[id],
    dateJoined: getRandomDateTime(),
    status: getRandomStatus()
}));
