export type ProductI = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};

export type ProductInputI = {
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
};
