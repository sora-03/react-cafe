import Description from "./components/Description";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Image from "./components/Image";
import Map from "./components/Map";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="App">
      <Header />
      <Image />
      <Description />
      <Map />
      <Summary />
      <Footer />
    </div>
  );
}

export default App;
