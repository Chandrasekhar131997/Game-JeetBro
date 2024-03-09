import "./App.css";
import Navbar from "./Component/Navbar/Navbar"
import Footer from "./Component/Footer/Footer";
import Index from "./Component/Content/Index";
import Card from "./Component/Card/Card";
import Service from "./Component/Service/Service";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Index />
      <Service />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
