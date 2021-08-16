import { useState } from "react";
 export interface Iprops {
  fname:string;
  lname:string;
  gender:string;
};

const Card =(props:any) =>{
  const[customer, setcustomer] = useState<Iprops>({
   fname:"",
   lname:"",
   gender:""
  });

  const handleChangeFname =(event :any) =>{
  setcustomer({
    ...customer,
    fname :event.target.value
  })
  };

  const handleChangeLname =(event :any) =>{
    setcustomer({
      ...customer,
      lname:event.target.value,
    });
    }

    const handleChangeGender=(event :any) =>{
      setcustomer({
        ...customer,
        gender: event.target.value,
      });
      }
      const submitData =(event:any)=>{
                 props.adddata(customer);
                 setcustomer({ fname:"",
                 lname:"",
                 gender:""});
                 event.preventDefault();
                 
      }
  return (
<div> 
       <form style={{textAlign:"center"}}> 
                <label>First Name:</label><br></br>
                <input type="text" name="fname" value={customer.fname} onChange={handleChangeFname} /><br/>
                <label>Last Name:</label><br></br>
                <input type="text" name="lname" value={customer.lname} onChange={handleChangeLname} /><br/>
                <legend>Gender:</legend>
                <input type="text" name="gender" value={customer.gender} onChange={handleChangeGender} /><br/><br/>
                <button type="submit" onClick={submitData}>Add</button>

        </form>
</div>

  )


}

export default Card;