import Logo from "../../assets/logo.png";
import Slider from "../../assets/slider.png";
import Google from "../../assets/google.png";
import Auth from "../../assets/auth.png";
import Auth2 from "../../assets/auth2.png";
import Icon from "../../assets/icon.png";
import Auth3 from "../../assets/auth#.png";
import Wallet from "../../assets/wallet.png";
import BuyCrypto from "../../assets/buy-crypto.png";
import Heart from "../../assets/heart-tick.png";
import Lock from "../../assets/lock.png";
import Key from "../../assets/key.png";
import Document from "../../assets/document.png";
import Avatar from "../../assets/avatar.png";
import Password from "../../assets/password.png";
import FingerPrint from "../../assets/finger-scan.png";
import Confetti from "../../assets/confetti.png";

export const Images = {
  Logo,
  Slider,
  Auth,
  Auth2,
  Auth3,
  Wallet,
  Avatar,
  Password,
  Confetti,
};

export const Icons = {
  Google,
  Icon,
  BuyCrypto,
  FingerPrint,
  Heart,
  Lock,
  Key,
  Document,
};

export const slides = [
  {
    id: "1",
    title: "Welcome to Dhive",
    description:
      "Dhive lets you tokenize your business, trade it on-chain, and open new doors to ownership and investment.",
  },
  {
    id: "2",
    title: "Shop, Trade & Earn – On-Chain",
    description:
      "From P2P USDT trades to purchasing real products directly from tokenized businesses, it all happens here, securely and on-chain.",
  },
  {
    id: "3",
    title: "Built for Security, Powered by You",
    description:
      "Create an on-chain wallet in seconds. No third-party logins. Full control of your assets, trades, and tokens.",
  },
];

export const walletOptions = [
  {
    image: Icons.BuyCrypto,
    title: "Seamless Setup",
    text: "Create a wallet using a Google or Apple account and start exploring web3 with ease.",
  },
  {
    image: Icons.Lock,
    title: "Enhanced Security",
    text: "Your wallet is stored securely and centralized across multiple factors.",
  },
  {
    image: Icons.Heart,
    title: "Easy Recovery",
    text: "Recover access to your wallet with your Google or Apple Account and a 4-digit PIN.",
  },
];
export const importOptions = [
  {
    image: Icons.Document,
    title: "Import Seed Phrase",
    route: "/recovery-phase",
  },
  {
    image: Icons.Key,
    title: "Import Private Key",
    route: "/private-key",
  },
];
export const protectWalletOptions = [
  {
    image: Icons.Lock,
    title: "Passcode (Required)",
    text: "Create new passcode",
  },
  {
    image: Icons.FingerPrint,
    title: "Device",
    text: "Use Device Authentication",
  },
];
