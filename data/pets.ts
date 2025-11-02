export interface Pet {
    id: number;
    name: string;
    type: string;
    adopted: string;
    image: string;
}

export const pets: Pet[] = [
    {
        id: 1,
        name: "Buddy",
        type: "Dog",
        adopted: "Yes",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
    },
    {
        id: 2,
        name: "Whiskers",
        type: "Cat",
        adopted: "No",
        image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
    },
    {
        id: 3,
        name: "Charlie",
        type: "Dog",
        adopted: "No",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop",
    },
    {
        id: 4,
        name: "Luna",
        type: "Cat",
        adopted: "Yes",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop",
    },
    {
        id: 5,
        name: "Max",
        type: "Dog",
        adopted: "No",
        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=400&fit=crop",
    },
    {
        id: 6,
        name: "Bella",
        type: "Cat",
        adopted: "Yes",
        image: "https://images.unsplash.com/photo-1573865526739-10c1d3a1f0cc?w=400&h=400&fit=crop",
    },
    {
        id: 7,
        name: "Rocky",
        type: "Dog",
        adopted: "No",
        image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=400&h=400&fit=crop",
    },
    {
        id: 8,
        name: "Mittens",
        type: "Cat",
        adopted: "No",
        image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=400&h=400&fit=crop",
    },
];

