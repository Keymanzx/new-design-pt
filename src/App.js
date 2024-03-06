import "./App.css";
import Homepage from "./containers/Homepage";
import Navbar from "./containers/Navbar";
import Footer from "./containers/Footer";

function App() {
  return (
    <div className="bg-[#3B3960] min-h-screen">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
