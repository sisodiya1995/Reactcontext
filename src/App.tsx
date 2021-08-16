import React,{useState} from 'react';
import Card, { Iprops } from './card';
import CustomerData from './customerData';

const  App=()=> {
                   const [customers, setcustomers]= useState<Iprops[]>([]);
                  const Adddata = (props:Iprops):void =>{
                  const newCustomer ={fname:props.fname,lname:props.lname,gender:props.gender};
                   setcustomers([...customers, newCustomer])
                                                       };
                  const Deletedata=(Customerdatadelete:string):void  =>   {
                             setcustomers(customers.filter((task)  =>{
                    return task.fname !== Customerdatadelete;
                                        }));
                                         };
  return(
    <div> 
                
                      <h3 style={{textAlign:'center'}}>Customer Input</h3>
                         <Card adddata={Adddata}/>
                         {customers.map((task:Iprops,key:number)=>{
                        return <CustomerData key={key} task={task} Deletedata={Deletedata}/>
                    })}   
    </div>
  );
  };

export default App;
