"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function TaskForm(){
   const [store,setStore] =useState<any>([]);

   const [task,setTask]  =useState<string>("");

   //to prevent reloading page
   function handleSubmit(e:any){
        e.preventDefault();
        //console.log(task);
        //to Store task list /using ... can show all list in array 
       setStore((pre:any)=>[...pre,task]);
       setTask("");
   }
    //console.log(store);
   return(
    <div className="grid md:grid-cols-2 gap-5 p-5">
        <div className="rounded-xl border-2 p-5">
        {/* <p>{task}</p>        */}
        <form onSubmit={handleSubmit}>
             {/* <input  className="border p-3"  onChange={(e)=>setTask(e.target.value)}/> */}
             {/* <button>Save</button> */}
             {/* to use ui with shadcn */}   
        <Label htmlFor="todo">Your Tasks</Label>
        <Input value={task} onChange={(e)=>setTask(e.target.value)}></Input>
        <Button type="submit"  className="mt-5 w-full" >Save</Button>
        </form>
     

       
   
    </div>
    <div className="rounded-xl border-2 p-5">
         {/* to show save task list */}
         <ul className="space-y-1">
            {store.map((s:string)=>(
            <li className="rounded-xl border p-2" key={s}>{s}</li> 
            // key={s} -dom tree that keep object id 
            ))}
        </ul>
    </div>
    </div>
    ); 
    
}