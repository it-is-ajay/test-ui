import './assets/index.scss'
import Main from './component/Main'
import Performance from './component/Performance';
import WhyUs from './component/WhyUs';
import Feedback from './component/Feedback';
import "bootstrap/dist/css/bootstrap.min.css";
import Partition from './component/Partition';
import Footer from './component/Footer';

function App() {
  return <>
    <Main />
    <WhyUs />
    <Performance />
    <Partition />
    <Feedback />
    <Footer />
  </>
}

export default App;
