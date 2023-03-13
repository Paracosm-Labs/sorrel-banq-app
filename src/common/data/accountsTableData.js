// Import Images
import europeanUnion from "../../assets/images/european-union.svg";
import Trinidad from "../../assets/images/trinidad-and-tobago.svg";
import UnitedKingdom from "../../assets/images/united-kingdom.svg";
import Dollar from "../../assets/images/svg/usdd.svg";
import Yuan from "../../assets/images/svg/usdd.svg";

const AccountsTableData = [
  {
    id: 1,
    label: "TTD",
    imgPath: Trinidad,
    apr: "2.69%",
    savingBalance: "$3,444,452",
    walletBalance: "$44,452",
  },
  {
    id: 2,
    label: "EUR",
    imgPath: europeanUnion,
    apr: "2.69%",
    savingBalance: "$1,444,223",
    walletBalance: "$44,452,22",
  },
  {
    id: 3,
    label: "GBP",
    imgPath: UnitedKingdom,
    apr: "2.69%",
    savingBalance: "$44,452,222",
    walletBalance: "$44,452,222",
  },
  {
    id: 4,
    label: "USD",
    imgPath: Dollar,
    apr: "2.69%",
    savingBalance: "$44,452,222",
    walletBalance: "$44,452,222",
  },
  {
    id: 4,
    label: "CNY",
    imgPath: Yuan,
    apr: "2.69%",
    savingBalance: "$44,452,222",
    walletBalance: "$44,452,222",
  },
];

export { AccountsTableData };
