import Image from "next/image";
import Banner from "@/components/Homepage/Banner";
import TrustedBy from "@/components/Homepage/TrustedBy";
import AccountSelector from "@/components/Homepage/AccountSelector";
import CurrencySlider from "@/components/Account/CurrencySlider";
import YourMoney from "@/components/Homepage/YourMoney";
import PortfolioSection from "@/components/Homepage/PortfolioSection";
import MagicalTradingMT5 from "@/components/Homepage/MagicalTradingMT5";
import LiquidityStatsSection from "@/components/Homepage/LiquiditySection";
import IntroducingBroker from "@/components/Homepage/IntroducingBroker";
import SignupTrading from "@/components/Homepage/SignUpTrading";
import GenieBanner from "@/components/Homepage/GenieBanner";
import Banner20 from "@/components/Homepage/Banner-20";
import PAMMAccountsBanner from "@/components/Homepage/PAMMAccountsBanner";
import TradingSessionsBanner from "@/components/Homepage/TradingSessionsBanner";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Genie Ltd.",
  description:
    "Kickstart your financial freedom with a globally reputed FX broker offering a wide range of financial instruments, including currencies, stocks, commodities, metals, indices & more",
  path: "/",
  keywords: [
    "Genie Ltd.",
    "FX broker",
    "Genie IB broker",
    "Genie MT5 broker",
    "Forex Trading",
    "Genie trading",
    "forex broker",
    "MT5 broker",
    "trading accounts",
    "20 bonus promotion",
    "IB broker",
  ],
});

export default function Home() {
  return (
    <>
      <Banner />
      <CurrencySlider />
      <YourMoney />
      <PortfolioSection />
      <AccountSelector />
      <MagicalTradingMT5 />
      <LiquidityStatsSection />
      <PAMMAccountsBanner />
      <IntroducingBroker />
      <SignupTrading />
      <Banner20 />
      <TradingSessionsBanner />
      <TrustedBy />
      <GenieBanner />
    </>
  );
}
