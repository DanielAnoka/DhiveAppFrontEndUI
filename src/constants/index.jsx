import { Icons } from "./icon";
import { Images } from "./image";

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

export const assets = [
  {
    name: "Sent USDT",
    description: "-392.45 USDT",
    date: "Yesterday",
    about: "Sent to 0x49e3b...oabeb3",
    price: 1.0,
    change: 0.02,
    amount: 392.45,
    icon: Icons.ArrowUp,
    backgroundColor: "#00011B",
  },
  {
    name: "Swap",
    description: "+0.9893820 USDT",
    date: "Yesterday",
    about: "BNB to Ethereum",
    price: 85987.99,
    change: 4.96,
    amount: 0,
    icon: Icons.Swap,
    backgroundColor: "#00011B",
  },
  {
    name: "Received USDT",
    description: "+150.00 USDT",
    date: "Today",
    about: "From 0x82b9f...cc2e1a",
    price: 1.0,
    change: 0.0,
    amount: 150.0,
    icon: Icons.ArrowDown,
    backgroundColor: "#00011B",
  },
  {
    name: "Sent ETH",
    description: "-0.12 ETH",
    date: "2 days ago",
    about: "To 0x1c3d...af09b1",
    price: 2741.55,
    change: -1.23,
    amount: 0.12,
    icon: Icons.ArrowUp,
    backgroundColor: "#00011B",
  },
  {
    name: "Received BNB",
    description: "+0.59 BNB",
    date: "3 days ago",
    about: "From Binance",
    price: 317.44,
    change: 0.32,
    amount: 0.59,
    icon: Icons.ArrowDown,
    backgroundColor: "#00011B",
  },
  {
    name: "Swap",
    description: "+40.5 MATIC",
    date: "Last Week",
    about: "USDT to MATIC",
    price: 0.9,
    change: 1.4,
    amount: 40.5,
    icon: Icons.Swap,
    backgroundColor: "#00011B",
  },
  {
    name: "Sent BTC",
    description: "-0.0045 BTC",
    date: "Last Week",
    about: "Sent to Coinbase",
    price: 62134.0,
    change: -0.5,
    amount: 0.0045,
    icon: Icons.ArrowUp,
    backgroundColor: "#00011B",
  },
  {
    name: "Received USDC",
    description: "+300.00 USDC",
    date: "Last Month",
    about: "Airdrop",
    price: 1.0,
    change: 0,
    amount: 300,
    icon: Icons.ArrowDown,
    backgroundColor: "#00011B",
  },
];

export const filterTypes = [
  {
    image: Icons.Category,
    type: "Category",
    resetOptions: "All",
  },
  {
    image: Icons.DollarSign,
    type: "Price Range",
    resetOptions: "All Prices",
  },
  {
    image: Icons.Verify,
    type: "Business",
    resetOptions: "Verified",
  },
  {
    image: Icons.Sort,
    type: "Sort By",
    resetOptions: "Recommended",
  },
  {
    image: Icons.Location,
    type: "Location",
    resetOptions: "All",
  },
];

export const chains = [
  { label: 'Dhive Network', icon: Icons.Trading },
  { label: 'Ethereum', icon: Icons.Trading },
  { label: 'Binance Smart Chain', icon: Icons.Trading },
];

const tokens = [
  { label: 'EGAX', icon: Icons.Trading },
  { label: 'USDT', icon: Icons.Trading },
  { label: 'ETH', icon: Icons.Trading },
];

export const orders = [
    { id: 1, image: Images.Order, title: 'iPhone 15 Pro', subtitle: 'From Mark Studio' },
    { id: 2, image: Images.Order2, title: 'iPhone 15 Pro', subtitle: 'From Mark Studio' },
    { id: 3, image: Images.Order3, title: 'iPhone 15 Pro', subtitle: 'From Mark Studio' },
    { id: 4, image: Images.Order4, title: 'iPhone 15 Pro', subtitle: 'From Mark Studio' },
    { id: 5, image: Images.Order5, title: 'iPhone 15 Pro', subtitle: 'From Mark Studio' },
    { id: 6, image: Images.Order6, title: 'iPhone 15 Pro', subtitle: 'From Mark Studio' },
    { id: 7, image: Images.Order7, title: 'iPhone 15 Pro', subtitle: 'From Mark Studio' },
    { id: 8, image: Images.Order8, title: 'iPhone 15 Pro', subtitle: 'From Mark Studio' },
];