import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div className="bg-gray-900 relative h-full">
      <div className="bg-gray-900 max-w-4xl my-0 mx-auto py-0 border-x-2 border-solid border-slate-700">
        <Header />
        <Footer />
        <Card />
        <div className="mt-24"></div>
      </div>
    </div>
  );
}

export default App;
