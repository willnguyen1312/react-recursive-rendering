import { MenuItemType } from "./types";

export const sampleMenuData: MenuItemType[] = [
  {
    label: "Vehicle",
    children: [
      {
        label: "Car",
        children: [
          {
            label: "BMW",
            children: [
              {
                label: "X5",
                children: [],
              },
              {
                label: "X6",
                children: [],
              },
            ],
          },
          {
            label: "Toyota",
            children: [],
          },
          {
            label: "Honda",
            children: [],
          },
        ],
      },
      {
        label: "Motobike",
        children: [
          {
            label: "Honda",
            children: [
              {
                label: "Future",
              },
              {
                label: "Winner",
              },
            ],
          },
          {
            label: "Yamaha",
            children: [
              {
                label: "Exciter",
              },
            ],
          },
          {
            label: "Suzuki",
          },
        ],
      },
    ],
  },
];
