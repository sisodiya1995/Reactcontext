
import { useState,useContext } from "react";
import { userContext } from "./customerData";
import {v4 as uuid} from 'uuid'
 export interface Iuser {
   id:string;
  fname:string;
  lname:string;
  gender:string;
};

const Userform =(props:any) =>{
  const {Adduser}=useContext(userContext);
  const[user, setuser] = useState<Iuser>({
    id:uuid(),
   fname:"",
   lname:"",
   gender:""
  });

  const handleChangeFname =(event :any) =>{
  setuser({
    ...user,
    fname :event.target.value
  })
  };

  const handleChangeLname =(event :any) =>{
    setuser({
      ...user,
      lname:event.target.value,
    });
    }

    const handleChangeGender=(event :any) =>{
      setuser({
        ...user,
        gender: event.target.value,
      });
      }
      const submitData =(event:any)=>{
                              event.preventDefault();
                              Adduser(user);
                             setuser({id:uuid(),fname:"",
                                                    lname:"",
                                                    gender:""});         
                               }
  return (
<div> 
       <form style={{textAlign:"center"}}> 
                <label>First Name:</label><br></br>
                <input type="text" name="fname" value={user.fname} onChange={handleChangeFname} /><br/>
                <label>Last Name:</label><br></br>
                <input type="text" name="lname" value={user.lname} onChange={handleChangeLname} /><br/>
                <legend>Gender:</legend>
                <input type="text" name="gender" value={user.gender} onChange={handleChangeGender} /><br/><br/>
                <button type="submit" onClick={submitData}>Add Data</button>

        </form>
</div>
  )
}

export default Userform;