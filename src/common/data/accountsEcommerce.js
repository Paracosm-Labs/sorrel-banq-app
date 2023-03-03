import dollar from "../../assets/images/svg/usdd.svg";
import europeanUnion from "../../assets/images/european-union.svg";
import Trinidad from "../../assets/images/trinidad-and-tobago.svg";
import UnitedKingdom from "../../assets/images/united-kingdom.svg";

const ecomWidgets = [
  {
    id: 1,
    label: "USDD",
    imgPath: dollar,
    badge: "ri-arrow-right-up-line",
    badgeClass: "success",
    percentage: "0.00",
    counter: "1.00",
    link: "View net earnings",
    bgcolor: "success",
    icon: "bx bx-dollar-circle",
    decimals: 2,
    prefix: "$",
    suffix: "",
    chartsColor: "#13c56b",
    series: [
      {
        name: "USDD",
        data: [24, 68, 39, 86, 29, 42, 11, 58],
      },
    ],
  },
  {
    id: 2,
    label: "EUR",
    imgPath: europeanUnion,
    badge: "ri-arrow-right-down-line",
    badgeClass: "danger",
    percentage: "-3.57",
    counter: "0.94",
    link: "View all orders",
    bgcolor: "info",
    icon: "bx bx-shopping-bag",
    decimals: 2,
    prefix: "",
    separator: ",",
    suffix: "",
    chartsColor: "#13c56b",
    series: [
      {
        name: "gEUR",
        data: [13, 76, 12, 85, 25, 60, 9, 54],
      },
    ],
  },
  {
    id: 3,
    label: "GBP",
    imgPath: UnitedKingdom,
    badge: "ri-arrow-right-up-line",
    badgeClass: "success",
    percentage: "+29.08",
    counter: "0.84",
    link: "See details",
    bgcolor: "warning",
    icon: "bx bx-user-circle",
    decimals: 2,
    prefix: "",
    suffix: "",
    chartsColor: "#13c56b",
    series: [
      {
        name: "gGBP",
        data: [9, 66, 41, 89, 12, 36, 25, 54],
      },
    ],
  },
  {
    id: 4,
    label: "TTD",
    imgPath: Trinidad,
    badgeClass: "muted",
    percentage: "+0.00",
    counter: "6.78",
    link: "Withdraw money",
    bgcolor: "primary",
    icon: "bx bx-wallet",
    decimals: 2,
    prefix: "$",
    suffix: "",
    chartsColor: "#ed5e5e",
    series: [
      {
        name: "gTTD",
        data: [30, 58, 29, 89, 12, 36, 9, 54],
      },
    ],
  },
];

export { ecomWidgets };
