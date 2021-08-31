
import React,{useContext} from "react";
import { createContext } from "react";
import { Iuser } from "./card";

interface userContextData{
            users:Iuser[];
            Adduser:(props:Iuser)=> void;
            Deleteuser:(id:string)=>void; 
}
 const userContextDefaultValue: userContextData = { 
                                 users: [],
                                 Adduser:(props:Iuser)=> null,
                                 Deleteuser:(id:string)=>null 
}

 export const userContext =createContext<userContextData>(userContextDefaultValue);
const UserData= ()=>{
              const {Deleteuser}=useContext(userContext)
             const {users}=useContext(userContext);
   
           return(
                <div>
                    {    users.map(Iuser=>(
                          <div style={{backgroundColor:"gray", boxSizing:"border-box",
                          width:" 150px",
                          height: "200px",
                          padding: "10px" ,
                          border: "2px solid blue",display:"inline-block",marginTop:"100px",marginLeft:"100px"} } >
                              <h3>User Data</h3>
                               <p>First Name:{Iuser.fname}</p>
                               <p>Last name:{Iuser.lname}</p>
                               <p>Gender:{Iuser.gender}</p>
                               <button onClick={()=>Deleteuser(Iuser.id)} >Delete</button>
                          </div>
                        ))
                   }
           
            </div>
    )
};
export default UserData;