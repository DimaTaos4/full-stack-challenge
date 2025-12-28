import { nanoid } from "nanoid";

const retailers = [
    {
        id: nanoid(),
        key: "zalando",
        name: "Zalando",
    },
    {
        id: nanoid(),
        key: "breuninger",
        name: "Breuninger",
    },
];

export default retailers;

// Retailers are static business entities, therefore stored as configuration.
// Retailer sind statische Business-Entitäten und werden daher als Konfiguration gespeichert.