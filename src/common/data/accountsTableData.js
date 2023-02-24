// Import Images
import europeanUnion from "../../assets/images/european-union.svg";
import Trinidad from "../../assets/images/trinidad-and-tobago.svg";
import UnitedKingdom from "../../assets/images/united-kingdom.svg";
import Dollar from "../../assets/images/Dollar.svg";

const AccountsTableData = [
  {
    id: 1,
    label: "Travel",
    imgPath: Dollar,
    apr: "2.69%",
    savingBalance: "$44,452",
    walletBalance: "$44,452",
    currencies: "4",
  },
  {
    id: 2,
    label: "Travel",
    imgPath: europeanUnion,
    apr: "2.69%",
    savingBalance: "$44,223,22",
    walletBalance: "$44,452,22",
    currencies: "4",
  },
  {
    id: 3,
    label: "Personal",
    imgPath: UnitedKingdom,
    apr: "2.69%",
    savingBalance: "$44,452,222",
    walletBalance: "$44,452,222",
    currencies: "4",
  },
];

export { AccountsTableData };
