import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import UpdateTreatForm from '../../components/UpdateTreatForm/UpdateTreatForm';
import * as treatsAPI from '../../utilities/treats-api';

export default function UpdateTreatPage({user }) {
  const [treats, setTreats] = useState([]);
    // const userId = user
  
    const fetchTreats = async () => {
        try {
            const data = await treatsAPI.getAllTreats();
            setTreats(data);
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (treats.length === 0) {
          fetchTreats();
        }
      }, [treats, fetchTreats]);
    

    const treatId = useParams();
    console.log(treatId)
  return (
  <>
  <UpdateTreatForm treats={treats}  treatId={treatId} user={user}  />
  </>
  )
}








// const handleUpdate = async (treatId, payload) => {
//   try {
//     await treatsAPI.updateTreat(treatId, { ...payload });
//     setTreats((prevTreats) =>
//       prevTreats.map((treat) =>
//         treat._id === treatId ? { ...treat } : treat
//       )
//     );
//   //   console.log(treatId)
//     fetchTreats()
//   } catch (error) {
//     console.error(error);
//   }
// };