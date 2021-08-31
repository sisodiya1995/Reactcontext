import React,{useState} from 'react';
import Userform, { Iuser} from './card';
import UserData from './customerData';
import { userContext } from './customerData';
import{v4 as uuid} from 'uuid'



     const  App=()=> {
                   const [users, setusers]= useState<Iuser[]>([]);
                   const Adduser = (props:Iuser):void =>{
                                        setusers([...users,{id:uuid(),fname:props.fname,lname:props.lname,gender:props.gender} ])
                                                       };
                  const Deleteuser=(id:string):void  =>   {
                                              setusers(users.filter((users)  =>{
                                              return users.id!== id;
                                                                          }));
                                                         };
           return(
               <div> 
                      <userContext.Provider value={{users ,Adduser,Deleteuser}}>
                      <h2 style={{textAlign:'center'}}>User Detail</h2>
                          <Userform/>
                          <UserData/>
                       </userContext.Provider>                     
              </div>
  );
  };

export default App;
