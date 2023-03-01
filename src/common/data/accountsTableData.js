// Import Images
import europeanUnion from "../../assets/images/european-union.svg";
import Trinidad from "../../assets/images/trinidad-and-tobago.svg";
import UnitedKingdom from "../../assets/images/united-kingdom.svg";
import Dollar from "../../assets/images/svg/usd.svg";

const AccountsTableData = [
  {
    id: 1,
    label: "Personal",
    imgPath: Trinidad,
    apr: "2.69%",
    savingBalance: "$3,444,452",
    walletBalance: "$44,452",
    currencies: "4",
  },
  {
    id: 2,
    label: "Travel",
    imgPath: europeanUnion,
    apr: "2.69%",
    savingBalance: "$1,444,223",
    walletBalance: "$44,452,22",
    currencies: "4",
  },
  {
    id: 3,
    label: "Stakescriptions",
    imgPath: UnitedKingdom,
    apr: "2.69%",
    savingBalance: "$44,452,222",
    walletBalance: "$44,452,222",
    currencies: "4",
  },
  {
    id: 4,
    label: "Shopping",
    imgPath: Dollar,
    apr: "2.69%",
    savingBalance: "$44,452,222",
    walletBalance: "$44,452,222",
    currencies: "4",
  },
];

export { AccountsTableData };
