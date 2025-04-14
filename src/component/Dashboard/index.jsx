import Feedback from "./Feedback";
import Footer from "./Footer";
import Main from "./Main";
import Partition from "./Partition";
import Performance from "./Performance";
import WhyUs from "./WhyUs";

export default function Dashboard() {
    return <>
        <Main />
        <WhyUs />
        <Performance />
        <Partition />
        <Feedback />
        <Footer />
    </>
}