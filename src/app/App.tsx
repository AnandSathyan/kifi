import { Provider } from "react-redux";
import Header from "../components/header/Header";
import NewHeader from "../components/header/NewHeader";
import ImageSlider from "../components/imageslider/ImageSlider";
import TopMenu from "../components/topMenu/TopMenu";
import { UsersView } from "../views";
import FeaturedCategory from "../components/FeaturedCategory/FeaturedCategory";
import { store } from "./store";
import ProductCard from "../components/cards/ProductCard";
import Footer from "../components/Footer/Footer";
import OriginalHeader from "../components/header/OriginalHeader";
import Banner from "../components/Banner/Banner";
import Category from "../components/Category/Category";
import Products from "../components/Products/Products";
import Services from "../components/Services/Services";
import Blog from "../components/Blog/Blog";
import NotificationToast from "../components/Notifiction/NotificationToast";
import Modal from "../components/modal/Modal";
import { useEffect } from "react";
import { AuthenticationClient } from "../api/kifi";
import Routers from "../Navigation/Routing";
import { BrowserRouter } from "react-router-dom";
// import MarsTopNav from "../components/tests/Test";

function App() {
  <link rel="stylesheet" href="./assets/css/style-prefix.css" />;

  useEffect(() => {
    AuthenticationClient({
      jsonrpc: "2.0",
      method: "authenticate",
      params: { db: "KIFI_LIVE", login: "admin", password: "admin" },
    });
  }, []);

  return (
    <div className="p-0 m-0">
      <Provider store={store}>
        {/* <UsersView /> */}
        {/* <Header /> */}
        {/* <div className=""> */}
        {/* <TopMenu />
        <ImageSlider />
        <FeaturedCategory />
        <div className="flex m-10 p-10 gap-10 flex-wrap justify-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div> */}
        {/* <MarsTopNav/> */}
        {/* </div> */}
        {/* <NewHeader /> */}

        <OriginalHeader />
        <NotificationToast />
        <Modal />
        <main>
          {/* <Banner /> */}

          <Routers />

          {/* <ProductCard /> */}

          {/* <Services /> */}
          <Blog />
        </main>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
