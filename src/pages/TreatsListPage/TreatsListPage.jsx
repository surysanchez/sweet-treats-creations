import {React, useState, useEffect} from 'react'
import { getTreatById } from '../../utilities/treats-api'
import  * as treatsAPI from '../../utilities/treats-api'; 
import ShowTreatsList from '../../components/ShowTreatsList/ShowTreatsList';

export default function TreatsListPage({user}) {
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
    
      const handleDelete = async (treatId) => {
        try {
          await treatsAPI.deleteTreat(treatId);
          setTreats(treats.filter((treat) => treat._id !== treatId));
        } catch (error) {
          console.error(error);
        }
      };
     console.log(treats)
  return (
    <>
    
        {treats.map((treat, t) => {
            let treatId = treat._id
            return (
                <ShowTreatsList user={user}  treat={treat} treatId={treatId} key={t} handleDelete={handleDelete} />
            )
        })}
    
    </>
    
  )
}
