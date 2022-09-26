import { Billing } from "../components/Billing";
import { Booking } from "../components/Booking";
import { Diary } from "../components/Diary";
import { Footer } from "../components/Footer";
import { Framework } from "../components/Framework";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Host } from "../components/Host";
import { Payments } from "../components/Payments";
import { Share } from "../components/Share";
import { GlobalStyles } from "../components/styled/GlobalStyles";

export function LandingPage() {
    return (
        <GlobalStyles>
        <Header />
        <Hero />
        <Booking />
        <Share />
        <Payments />
        <Framework />
        <Billing />
        <Diary />
        <Host />
        <Footer />
        </GlobalStyles>
    )
}