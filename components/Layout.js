import HeadComp from "./Head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <>
            <HeadComp title={"Pizza Restaurant in NewYork"} content={"Best Pizza shop in town"}></HeadComp>
            <Navbar></Navbar>
            <div>
                {children}
            </div>
            <Footer></Footer>
        </>
    );
};

export default Layout;
