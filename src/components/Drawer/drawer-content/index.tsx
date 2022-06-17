import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import Social from "./social";
import StakeIcon from "../../../assets/icons/stake.svg";
import BondIcon from "../../../assets/icons/bond.svg";
import WonderlandIcon from "../../../assets/icons/logo.png";
import DashboardIcon from "../../../assets/icons/dashboard.svg";
import { trim, shorten } from "../../../helpers";
import { useAddress } from "../../../hooks";
import useBonds from "../../../hooks/bonds";
import { Link } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import "./drawer-content.scss";
import DocsIcon from "../../../assets/icons/stake.svg";
import GlobeIcon from "../../../assets/icons/wonderglobe.svg";
import ScaleIcon from "../../../assets/icons/scales.svg";
import FireIcon from "../../../assets/icons/fire.svg";
import BookIcon from "../../../assets/icons/book.svg";
import DiceIcon from "../../../assets/icons/quad.svg";
import TradeIcon from "../../../assets/icons/fair.png";
import classnames from "classnames";

function NavContent() {
    const [isActive] = useState();
    const address = useAddress();
    const { bonds } = useBonds();

    const checkPage = useCallback((location: any, page: string): boolean => {
        const currentPath = location.pathname.replace("/", "");
        if (currentPath.indexOf("manage") >= 0 && page === "manage") {
            return true;
        }
        if (currentPath.indexOf("mold") >= 0 && page === "mold") {
            return true;
        }
        if (currentPath.indexOf("melt") >= 0 && page === "melt") {
            return true;
        }
        if (currentPath.indexOf("measure") >= 0 && page === "measure") {
            return true;
        }
        if (currentPath.indexOf("docs")) {
            return false;
        }
        return false;
    }, []);

    return (
        <div className="dapp-sidebar">
            <div className="branding-header">
                <Link href="https://chocofinance.com" target="_blank">
                    <img alt="" src={WonderlandIcon} />
                </Link>

                {address && (
                    <div className="wallet-link">
                        <Link href={`https://explorer.thetatoken.org/account/${address}`} target="_blank">
                            <p>{shorten(address)}</p>
                        </Link>
                    </div>
                )}
            </div>

            <div className="dapp-menu-links">
                <div className="dapp-nav">
                    <Link
                        component={NavLink}
                        to="/manage"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "manage");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={DashboardIcon} />
                            <p>Manage</p>
                        </div>
                    </Link>

                    <Link
                        component={NavLink}
                        to="/mold"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "mold");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={DiceIcon} />
                            <p>Mold</p>
                        </div>
                    </Link>

                    <Link
                        component={NavLink}
                        id="bond-nav"
                        to="/melt"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "melt");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={FireIcon} />
                            <p>Melt</p>
                        </div>
                    </Link>

                    <Link
                        component={NavLink}
                        to="/measure"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "measure");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={ScaleIcon} />
                            <p>Measure</p>
                        </div>
                    </Link>

                    <Link href="https://docs.chocofinance.com" target="_blank" className={classnames("button-dapp-menu", { active: isActive })}>
                        <div className="dapp-menu-item">
                            <img alt="" src={BookIcon} />
                            <p>Read</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="dapp-menu-doc-link">
                <Link href="https://etherscan.io/address/0x7a3D1c03C0E3e0bdBC127867bA55C56720cE8823" target="_blank">
                    <p>Made by gmckee.eth</p>
                </Link>
            </div>
            <Social />
        </div>
    );
}

export default NavContent;
