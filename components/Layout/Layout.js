import Menubar from "../Menubar/Menubar";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
    return (
      <div className="grid-layout">
        <Menubar />
        <main>{children}</main>
        <Footer />
      </div>
    )
  }