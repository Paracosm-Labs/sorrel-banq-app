import dollar from "../../assets/images/Dollar.svg";
import europeanUnion from "../../assets/images/european-union.svg";
import Trinidad from "../../assets/images/trinidad-and-tobago.svg";
import UnitedKingdom from "../../assets/images/united-kingdom.svg";

const ecomWidgets = [
  {
    id: 1,
    label: "US Decentralized Dollar",
    imgPath: dollar,
    badge: "ri-arrow-right-up-line",
    badgeClass: "success",
    percentage: "+16.24",
    counter: "559.25",
    link: "View net earnings",
    bgcolor: "success",
    icon: "bx bx-dollar-circle",
    decimals: 2,
    prefix: "$",
    suffix: "k",
    chartsColor: "#13c56b",
    series: [
      {
        name: "Dash",
        data: [24, 68, 39, 86, 29, 42, 11, 58],
      },
    ],
  },
  {
    id: 2,
    label: "Euro",
    imgPath: europeanUnion,
    badge: "ri-arrow-right-down-line",
    badgeClass: "danger",
    percentage: "-3.57",
    counter: "36894",
    link: "View all orders",
    bgcolor: "info",
    icon: "bx bx-shopping-bag",
    decimals: 0,
    prefix: "",
    separator: ",",
    suffix: "",
    chartsColor: "#13c56b",
    series: [
      {
        name: "Dash",
        data: [13, 76, 12, 85, 25, 60, 9, 54],
      },
    ],
  },
  {
    id: 3,
    label: "British Pound",
    imgPath: UnitedKingdom,
    badge: "ri-arrow-right-up-line",
    badgeClass: "success",
    percentage: "+29.08",
    counter: "183.35",
    link: "See details",
    bgcolor: "warning",
    icon: "bx bx-user-circle",
    decimals: 2,
    prefix: "",
    suffix: "M",
    chartsColor: "#13c56b",
    series: [
      {
        name: "Neo",
        data: [9, 66, 41, 89, 12, 36, 25, 54],
      },
    ],
  },
  {
    id: 4,
    label: "My Trinidad & Tobago Dollar",
    imgPath: Trinidad,
    badgeClass: "muted",
    percentage: "+0.00",
    counter: "165.89",
    link: "Withdraw money",
    bgcolor: "primary",
    icon: "bx bx-wallet",
    decimals: 2,
    prefix: "$",
    suffix: "k",
    chartsColor: "#ed5e5e",
    series: [
      {
        name: "Binance",
        data: [30, 58, 29, 89, 12, 36, 9, 54],
      },
    ],
  },
];

export { ecomWidgets };
