import { ItemType } from "./types";

export const sampleMenuData: ItemType[] = [
  {
    label: "Vehicle",
    children: [
      {
        label: "Car",
        parent: 'Vehicle',
        children: [
          {
            label: "BMW",
            parent: "Car",
            children: [
              {
                parent: "BMW",
                label: "X5",
                children: [],
              },
              {
                parent: "BMW",
                label: "X6",
                children: [],
              },
            ],
          },
          {
            label: "Toyota",
            parent: "Car",
            children: [],
          },
          {
            label: "Honda",
            parent: "Car",
            children: [],
          },
        ],
      },
      {
        label: "Motobike",
        parent: "Vehicle",
        children: [
          {
            label: "Honda",
            parent: "Motobike",
            children: [
              {
                parent: "Honda",
                label: "Future",
              },
              {
                parent: "Honda",
                label: "Winner",
              },
            ],
          },
          {
            label: "Yamaha",
            parent: "Motobike",
            children: [
              {
                parent: "Yamaha",
                label: "Exciter",
              },
            ],
          },
          {
            parent: "Motobike",
            label: "Suzuki",
          },
        ],
      },
    ],
  },
];
