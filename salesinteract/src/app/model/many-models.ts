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

export const contacten = [
  {
      "name": "Leads",
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

export const stat1 = [
  {
      "name": "Leads",
      "value": 27
  },
  {
      "name": "Prospects",
      'value': 19
  },
  {
      'name': 'Customers',
      'value': 13
  }
];
export const stat2 = [
  {
      'name': 'Leads',
      'value': 22
  },
  {
      'name': 'Prospects',
      'value': 12
  },
  {
      'name': 'Customers',
      'value': 7
  }
];
export const stat3 = [
  {
      'name': 'Leads',
      'value': 14
  },
  {
      'name': 'Prospects',
      'value': 9
  },
  {
      'name': 'Customers',
      'value': 3
  }
];

export const afgeronde = [
  {
      'name': 'Informatie verstuurd',
      'value': 22
  },
  {
      'name': 'Offerte verstuurd',
      'value': 9
  },
  {
      'name': 'Offerte',
      'value': 23
  },
  {
      'name': 'Was niet bereikbaar',
      'value': 2
  },
];

export const single = [
  {
      'name': 'Germany',
      'value': 8940000
  },
  {
      'name': 'USA',
      'value': 5000000
  },
  {
      'name': 'France',
      'value': 7200000
  }
];

export const multi = [
  {
      'name': 'Germany',
      'series': [
          {
              'name': '2010',
              'value': 7300000
          },
          {
              'name': '2011',
              'value': 8940000
          }
      ]
  },

  {
      'name': 'USA',
      'series': [
          {
              'name': '2010',
              'value': 7870000
          },
          {
              'name': '2011',
              'value': 8270000
          }
      ]
  },

  {
      'name': 'France',
      'series': [
          {
              'name': '2010',
              'value': 5000002
          },
          {
              'name': '2011',
              'value': 5800000
          }
      ]
  }
];
