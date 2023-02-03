// import Banner from "./banner";
import Banner from "../components/banner";
import NavbarContain from "../components/navbar";
import MenuYConocenos from "../components/menu_y_conocenos";
import Footer from "../components/footer";

const HomePage = () => {
    return (
        <div>
        <NavbarContain />
        <Banner />
        <MenuYConocenos />
        <Footer/>
        </div>
    )
}




export default HomePage