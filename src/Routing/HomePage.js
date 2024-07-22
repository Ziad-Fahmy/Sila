import AboutUs from "../components/AboutUs/AboutUs";
import Home from "../components/Home/Home";
import PaymentDetails from "../components/PaymentDetails/PaymentDetails";
import PropertyData from "../components/PropertyData/PropertyData";
import Units from "../components/Units/Units";

function HomePage(){
    return(<>
    
    <Home />
    <AboutUs />
    <PropertyData />
    <Units />
    <PaymentDetails />
    </>)
}

export default HomePage;