import ContentCard from "./components/ContentCard";
import HeroBanner from "./components/HeroBanner";
import TopNavbar from "./components/TopNavbar";
import AddonsCard from "./components/AddonsCard";
import SignUpNewsLetter from "./components/SignUpNewsLetter";
import Footer from "./components/Footer";
import YTCarousel from "./components/YTCarousel";

function App() {
  return (
    <>
      <div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <TopNavbar />
        </div>
        <HeroBanner />
      </div>
      <div className="min-h-[76vh] bg-gray-200 flex flex-col justify-center items-center gap-16">
        <ContentCard />
        <ContentCard />
      </div>
      <div className="min-h-[50vh] grid place-content-center mt-10">
        <h2 className="font-bold text-3xl text-center">Add-ons</h2>
        <h4 className="card-subtitle text-center">
          Accessories for your FPV-Drones
        </h4>
        <div className="grid grid-cols-6 mx-auto mt-6 gap-4">
          <AddonsCard />
          <AddonsCard />
          <AddonsCard />
          <AddonsCard />
          <AddonsCard />
          <AddonsCard />
          <AddonsCard />
          <AddonsCard />
          <AddonsCard />
          <AddonsCard />
          <AddonsCard />
          <AddonsCard />
        </div>
      </div>

      <div className="mt-10 min-h-[70vh] grid place-content-center bg-gray-200">
        <YTCarousel />
      </div>
      <div className="">
        <SignUpNewsLetter />
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
}

export default App;
