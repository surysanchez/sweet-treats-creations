import TreatCard from '../../components/TreatCard/TreatCard';
import './TreatsPage.css';

export default function TreatsPage(props){
  const {treats} = props;
  
    return (
        <>
         <div className="cards-container">
      {treats.map((treat) => {
        return <TreatCard  treat={treat} key={treat.id}  />;
      })}
    </div>
        </>
    )
    // onAdd={onAdd}

}
