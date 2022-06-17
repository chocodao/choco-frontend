import TfuelIcon from "../assets/tokens/TFUEL.svg";
import UsdcIcon from "../assets/tokens/USDC.svg";
import BarsIcon from "../assets/tokens/BARS.png";

export interface IToken {
    name: string;
    address: string;
    img: string;
    isAvax?: boolean;
    decimals: number;
}

export const tfuel: IToken = {
    name: "TFUEL",
    isAvax: true,
    img: TfuelIcon,
    address: "",
    decimals: 18,
};

export const usdc: IToken = {
    name: "USDC",
    address: "0x130966628846BFd36ff31a822705796e8cb8C18D",
    img: UsdcIcon,
    decimals: 18,
};

const bars: IToken = {
    name: "BARS",
    address: "0xb54f16fB19478766A268F172C9480f8da1a7c9C3",
    img: BarsIcon,
    decimals: 9,
};

export const wtfuel: IToken = {
    name: "wTFUEL",
    address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    img: TfuelIcon,
    decimals: 18,
};


export default [
    tfuel,
    usdc,
    bars,
    wtfuel
];
