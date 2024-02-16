function LigneStandard(props: {
  label: string;
  value: string;
  taille: string;
}) {
  const tailleClasse =
    props.taille == "petit"
      ? "ligneStandardPetit"
      : props.taille == "grand"
      ? "ligneStandardGrand"
      : "ligneStandardMoyen";

  return (
    <div className={"ligneStandard  " + tailleClasse}>
      <div className="labelGauche">
        <p>{props.label}</p>
      </div>
      <div className="valueLarge ">
        <p>{props.value}</p>
      </div>
    </div>
  );
}

export default LigneStandard;
