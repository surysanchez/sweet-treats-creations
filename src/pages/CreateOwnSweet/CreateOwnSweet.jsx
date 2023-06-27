import React from 'react'
import Button from 'react-bootstrap/Button';
import CreateOwnForm from '../../components/CreateOwnForm/CreateOwnForm';
// import {size, filling, flavour} from "../../data.js";


export default function CreateOwnSweet({user}) {
  // async function handleAddTreat(treat) {
//   const treat = await createTreat(treat);
//   setTreat([...treats, treat]);
// }

  return (
    <>
   <CreateOwnForm user={user}  />
    </>
  )
}
