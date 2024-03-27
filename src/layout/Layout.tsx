import Footer from "@/components/Footer";
import MenuNav from "@/components/MenuNav";
import Routers from "@/routes/Routers";

const Layout = () => {
  return (
    <>
      <MenuNav />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
