"use client"
import { useState } from "react";

export function TaskForm(){
   const [store,setStore] =useState<any>(["Apple"]);

   const [task,setTask]  =useState<string>();

   //to prevent reloading page
   function handleSubmit(e:any){
        e.preventDefault();
        //console.log(task);
        //to Store task list /using ... can show all list in array 
       setStore((pre:any)=>[...pre,task]);
   }
    console.log(store);
   return(
    <div>
        <p>{task}</p>       
        <form onSubmit={handleSubmit}>
             <input  className="border p-3"  onChange={(e)=>setTask(e.target.value)}/>
             <button>Save</button>

        </form>

    </div>
    ); 
    
}