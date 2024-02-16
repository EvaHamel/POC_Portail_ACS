function LigneDouble(props: {
  label1: string;
  value1: string;
  label2: string;
  value2: string;
}) {
  return (
    <div className="ligneStandard">
      <div className="ligneStandardLabel1 labelGauche">{props.label1}</div>
      <div className="ligneStandardValue1">{props.value1}</div>
      <div className="ligneStandardLabel2">{props.label2}</div>
      <div className="ligneStandardValue2">{props.value2}</div>
    </div>
  );
}

export default LigneDouble;
