import React from "react";
import { Iprops } from "./card";

interface Props{
    task:Iprops;
    Deletedata(Customerdatadelete:string):void;
};

const CustomerData=({task,Deletedata}:Props)=>{

    const Handledelete=()=>{
                             Deletedata(task.fname);
    };
    return(
        <div style={{backgroundColor:"gray", boxSizing:"border-box",
        width:" 170px",
        height: "200px",
        padding: "10px" ,
        border: "2px solid blue",display:"inline-block",marginTop:"100px",marginLeft:"100px"}}>
            <h4>Customer detail</h4>
            <p>FirstName:{task.fname}</p>
            <p>LastName:{task.lname}</p>
            <p>Gender:{task.gender}</p>
            <button onClick={Handledelete}>Delete</button>
            <button>Edit</button>
        </div>
    )
};
export default CustomerData;