import Header from "@/components/Header";
import Formulaire from "@/pages/Formulaire";
import "../style/index.scss";

export default function Page() {
  return (
    <div className="app">
      <Header />
      <Formulaire />
    </div>
  );
}
