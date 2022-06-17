import BarsImg from "../assets/tokens/BARS.png";
import WrprImg from "../assets/tokens/WRPR.png";

function toUrl(tokenPath: string): string {
    const host = window.location.origin;
    return `${host}/${tokenPath}`;
}

export function getTokenUrl(name: string) {
    if (name === "bars") {
        return toUrl(BarsImg);
    }

    if (name === "wrpr") {
        return toUrl(WrprImg);
    }

    throw Error(`Token url doesn't support: ${name}`);
}
