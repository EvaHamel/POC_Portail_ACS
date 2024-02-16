import Header from "@/components/Header";
import Formulaire from "@/pages/Formulaire";
import "../style/index.scss";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="app">
      <Header />
      <Formulaire />
      <Footer />
    </div>
  );
}
