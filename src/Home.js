import FeatureFood from "./components/FeatureFood";
import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "Baemin Food Store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <div style={
        {
          width:"100%",
          height:"100px",
          backgroundColor:"white"
        }
      }>
        h
      </div>
      <FeatureFood />
      {/* <Services /> */}
      {/* <Trusted /> */}
    </>
  );
};

export default Home;
