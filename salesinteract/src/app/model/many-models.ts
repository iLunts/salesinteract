
// All task
export class Task {
    type: number;
    desc: string;
    manager: string;
    status: number;
    date: string;
    internal: string;
    external: string;
}

export class FileItem{
    name: string;
    added: string;
    view: string;
    image: string;
}

export class ProductItem{
    title: string;
    desc: string;
    color: string;
    status: number;
}

export var contacten = [
    {
        "name": "Suspects",
        "value": 14
    },
    {
        "name": "Prospects",
        "value": 9
    },
    {
        "name": "Customers",
        "value": 3
    }
];

export var stat1 = [
    {
        "name": "Suspects",
        "value": 27
    },
    {
        "name": "Prospects",
        "value": 19
    },
    {
        "name": "Customers",
        "value": 13
    }
];
export var stat2 = [
    {
        "name": "Suspects",
        "value": 22
    },
    {
        "name": "Prospects",
        "value": 12
    },
    {
        "name": "Customers",
        "value": 7
    }
];
export var stat3 = [
    {
        "name": "Suspects",
        "value": 14
    },
    {
        "name": "Prospects",
        "value": 9
    },
    {
        "name": "Customers",
        "value": 3
    }
];

export var afgeronde = [
    {
        "name": "Informatie verstuurd",
        "value": 22
    },
    {
        "name": "Offerte verstuurd",
        "value": 9
    },
    {
        "name": "Offerte",
        "value": 23
    },
    {
        "name": "Was niet bereikbaar",
        "value": 2
    },
];

export var single = [
    {
        "name": "Germany",
        "value": 8940000
    },
    {
        "name": "USA",
        "value": 5000000
    },
    {
        "name": "France",
        "value": 7200000
    }
];

export var multi = [
    {
        "name": "Germany",
        "series": [
            {
                "name": "2010",
                "value": 7300000
            },
            {
                "name": "2011",
                "value": 8940000
            }
        ]
    },

    {
        "name": "USA",
        "series": [
            {
                "name": "2010",
                "value": 7870000
            },
            {
                "name": "2011",
                "value": 8270000
            }
        ]
    },

    {
        "name": "France",
        "series": [
            {
                "name": "2010",
                "value": 5000002
            },
            {
                "name": "2011",
                "value": 5800000
            }
        ]
    }
];
