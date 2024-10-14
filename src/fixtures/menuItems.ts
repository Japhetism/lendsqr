import { BadgeIcon } from "../assets/svg/badgeIcon";
import { BankIcon } from "../assets/svg/bankIcon";
import { BriefCaseIcon } from "../assets/svg/briefCaseIcon";
import { ChartBarIcon } from "../assets/svg/chartBarIcon";
import { ClipboardListIcon } from "../assets/svg/clipboardListIcon";
import { CoinIcon } from "../assets/svg/coinIcon";
import { GalaxyIcon } from "../assets/svg/galaxyIcon";
import { HandshakeIcon } from "../assets/svg/handshakeIcon";
import { LoanIcon } from "../assets/svg/loanIcon";
import { MoneyIcon } from "../assets/svg/moneyIcon";
import { PiggyBankIcon } from "../assets/svg/piggyBankIcon";
import { ScrollIcon } from "../assets/svg/scrollIcon";
import { SliderIcon } from "../assets/svg/sliderIcon";
import { TransactionIcon } from "../assets/svg/transactionIcon";
import { UserCancelIcon } from "../assets/svg/userCancelIcon";
import { UserCheckIcon } from "../assets/svg/userCheckIcon";
import { UserCogIcon } from "../assets/svg/userCogIcon";
import { UserFriendIcon } from "../assets/svg/userFriendIcon";
import { UsersIcon } from "../assets/svg/usersIcon";

export const menuItems = {
    customers: [
        { label: "Users", path: "/users", icon: UserFriendIcon },
        { label: "Guarantors", path: "/guarantors", icon: UsersIcon },
        { label: "Loans", path: "/loans", icon: MoneyIcon },
        { label: "Decision Model", path: "/decision-model", icon: HandshakeIcon },
        { label: "Savings", path: "/savings", icon: PiggyBankIcon },
        { label: "Loan Requests", path: "/loan-requests", icon: LoanIcon },
        { label: "Whitelist", path: "/whitelist", icon: UserCheckIcon },
        { label: "Karma", path: "/karma", icon: UserCancelIcon },
    ],
    businesses: [
        { label: "Organization", path: "/organization", icon: BriefCaseIcon },
        { label: "Loan Products", path: "/loan-products", icon: LoanIcon },
        { label: "Savings Products", path: "/savings-products", icon: BankIcon },
        { label: "Fees and Charges", path: "/fees-charges", icon: CoinIcon },
        { label: "Transactions", path: "/transactions", icon: TransactionIcon },
        { label: "Services", path: "/services", icon: GalaxyIcon },
        { label: "Service Account", path: "/service-account", icon: UserCogIcon },
        { label: "Settlement", path: "/settlement", icon: ScrollIcon },
        { label: "Reports", path: "/reports", icon: ChartBarIcon },
    ],
    settings: [
        { label: "Preferences", path: "/preferences", icon: SliderIcon },
        { label: "Fees and Pricing", path: "/fees-pricing", icon: BadgeIcon },
        { label: "Audit Logs", path: "/audit-logs", icon: ClipboardListIcon },
    ],
};