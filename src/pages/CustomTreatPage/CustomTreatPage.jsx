import CustomTreatCard from "../../components/CustomTreatCard/CustomTreatCard";
import Button from "react-bootstrap/Button";

export default function CustomTreatPage(props) {
  return (
    <>
      <div className="cards-container">
        {props.customtreat.map((custom, idx) => {
          return <CustomTreatCard key={custom.id} custom={custom} idx={idx} />;
        })}
      </div>
    </>
  );
}
