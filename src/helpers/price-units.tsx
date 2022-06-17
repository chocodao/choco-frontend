import { SvgIcon } from "@material-ui/core";
import { ReactComponent as UsdcImg } from "../assets/tokens/USDC.svg";
import { IAllBondData } from "../hooks/bonds";
import { mim } from "../helpers/bond";

export const priceUnits = (bond: IAllBondData) => {
    if (bond.name === mim.name) return <SvgIcon component={UsdcImg} viewBox="0 0 32 32" style={{ height: "15px", width: "15px" }} />;

    return "$";
};
