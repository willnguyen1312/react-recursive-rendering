import { MenuItemType, Data } from "./types";

export const sampleData: Data = [
  {
    name: "Video",
    items: ["MP4", "AVI", "MKV"],
  },
  {
    name: "Evidence",
    items: ["Image", "Video"],
  },
  {
    name: "Devices",
    items: ["AB3", "AB2", "Taser"],
  },
  {
    name: "AB3",
    items: ["AB3 1", "AB3 2"],
  },
  {
    name: "Image",
    items: ["JPEG"],
  },
  {
    name: "JPEG",
    items: ["JPEG 1"],
  },
];

export const sampleMenuData: MenuItemType[] = [
  {
    label: "Devices",
    children: [
      {
        label: "AB3",
        children: [
          {
            label: "AB3 1",
            children: [],
          },
          {
            label: "AB3 2",
            children: [],
          },
        ],
      },
      {
        label: "AB2",
        children: [],
      },
      {
        label: "Taser",
        children: [],
      },
    ],
  },
  {
    label: "Evidence",
    children: [
      {
        label: "Image",
        children: [
          {
            label: "JPEG",
            children: [
              {
                label: "JPEG 1",
                children: [],
              },
            ],
          },
        ],
      },
      {
        label: "Video",
        children: [
          {
            label: "MP4",
            children: [],
          },
          {
            label: "AVI",
            children: [],
          },
          {
            label: "MKV",
            children: [],
          },
        ],
      },
    ],
  },
];
