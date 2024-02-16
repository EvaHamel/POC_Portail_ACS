"use client";

import Footer from "@/components/Footer";
import FormTitre from "../../components/FormTitre";
import LigneDouble from "../../components/LigneDouble";
import LigneStandard from "../../components/LigneStandard";
import generatePDF, { Resolution, Margin } from "react-to-pdf";
function Formulaire() {
  const noteBasDePage =
    "* Les mentions portées en gras relèvent des renseignements obligatoires visés à l’annexe II à l’article A 243-1 du Code des assurances";

  const getTargetElement = () => document.getElementById("formulaire-id");

  //A voir comment utiliser les options de génération pdf en typescript
  const options = {
    // default is `save`
    method: "open",
    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // increases the image quality but also the size of the PDF, so be careful
    // using values higher than 10 when having multiple pages generated, it
    // might cause the page to crash or hang.
    resolution: Resolution.HIGH,
    page: {
      // margin is in MM, default is Margin.NONE = 0
      margin: Margin.SMALL,
      // default is 'A4'
      format: "letter",
      // default is 'portrait'
      orientation: "landscape",
    },
    canvas: {
      // default is 'image/jpeg' for better size performance
      mimeType: "image/png",
      qualityRatio: 1,
    },
    // Customize any value passed to the jsPDF instance and html2canvas
    // function. You probably will not need this and things can break,
    // so use with caution.
    overrides: {
      // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
      pdf: {
        compress: true,
      },
      // see https://html2canvas.hertzen.com/configuration for more options
      canvas: {
        useCORS: true,
      },
    },
  };

  return (
    <div>
      <div className="formulaire" id="formulaire-id">
        <FormTitre text="1. Contrat d'assurance" />
        <LigneStandard
          label={"Nom de la compagnie d'assurance"}
          value={"Compagnie"}
          taille="petit"
        />
        <LigneStandard
          label={"Meilleure team de Apria"}
          value={"GSICASS"}
          taille="grand"
        />
        <LigneStandard
          label={"Numéro du contrat"}
          value={"123"}
          taille="moyen"
        />
        <LigneStandard
          label={"Souscripteur"}
          value={"Marie Claire"}
          taille="grand"
        />
        <FormTitre text="2. Déclarant"></FormTitre>
        <LigneStandard label={"Nom"} value={"John Smith"} taille="grand" />
        <LigneStandard
          label={"Adresse"}
          value={"1 rue marion"}
          taille="grand"
        />
        <LigneDouble
          label1={"Téléphone"}
          value1={"0123456789"}
          label2={"Mail"}
          value2={"adresse@mail.fr"}
        />
        <FormTitre text="3. Intermédiaire d'assurance"></FormTitre>
        <LigneDouble
          label1={"Code dans la compagnie"}
          value1={"AACC"}
          label2={"Nom"}
          value2={"Jean Luc"}
        />
        <LigneDouble
          label1={"Téléphone"}
          value1={"0123456789"}
          label2={"Mail"}
          value2={"adresse@mail.fr"}
        />
        <FormTitre text="4. Construction"></FormTitre>
        <LigneStandard
          label={"Date d'ouverture du chantier"}
          value={"01/01/2024"}
          taille="grand"
        />
        <LigneStandard
          label={"Date de réception"}
          value="01/01/2024"
          taille="grand"
        />
        <LigneStandard
          label={"Date de la première occupation des locaux"}
          value={"01/01/2024"}
          taille="grand"
        />
        <FormTitre text="5. Sinistre"></FormTitre>
        <LigneStandard
          label={"Date d'apparition des dommages"}
          value={"01/01/2024"}
          taille="grand"
        />
        <p>{noteBasDePage}</p>
      </div>

      <div className="bouton" onClick={() => generatePDF(getTargetElement)}>
        <p>Télécharger le PDF</p>
      </div>
    </div>
  );
}

export default Formulaire;
