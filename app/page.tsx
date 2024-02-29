"use client";

import React, { useState } from 'react';
import Link from 'next/link'

interface Task {
  id: number;
  text: string;
}

export default function Page() {


    const [tasks, setTasksList] = useState<Task[]>([])
    const [newTaskText, setTasksText] = useState('')

    const addTask = () => {

      if (newTaskText !== '') {
        const newTask: Task = {
          id: tasks.length + 1,
          text: newTaskText,
        }

        setTasksList([...tasks, newTask])

        setTasksText('')

      }

    }

    const removeTask = (taskId: number) => {
      setTasksList(tasks.filter(task => task.id != taskId))
    }

    return (

      
      <div className="grid grid-cols-[1fr_1fr] h-screen  overflow-y-auto">
        

        <div className="flex items-center justify-center bg-blue-500">
          <div className="fixed">
        
            <div>
              <input
                value={newTaskText}
                placeholder='Type...'
                className="pl-2 m-4 h-10 w-1/2"
                onChange={(e) => setTasksText(e.target.value)}
              />
              <button className="hover:bg-blue-400 transition-colors duration-300 text-white border-2 p-6 rounded border-white" onClick={addTask}>
                Add Task
              </button>
            </div>
    

            <div className="text-white border-2 rounded border-white mt-8 h-[300px] max-h-[300px] overflow-auto">
              <ul>
                {tasks.map(({ id, text }) => (
                  <li key={id} className="flex justify-between items-center border-b mb-2 pl-4 pr-4 py-2 text-white">
                    <span>{text}</span>
                    <button onClick={() => removeTask(id)} className="text-white font-bold">Remove</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    
 
        <div className="bg-blue-400">
          <ul className="p-4 grid justify-center items-center">
            

          <li className="mb-12">
            <form>
            <Link href="/apply" className="">
              <button className='max-w-[450px] w-[450px] h-16 bg-blue-400 hover:bg-blue-500 transition-colors duration-300 px-2 py-1 text-white border rounded-full'>
                Apply for Positions</button>
            </Link>
          </form>
            </li>

            <li className="mb-12">
            <form>
            <Link href="/careers" className="">
              <button className='max-w-[450px] w-[450px] h-16 bg-blue-400 hover:bg-blue-500 transition-colors duration-300 px-2 py-1 text-white border rounded-full'>
                Careers at Leap</button>
            </Link>
          </form>
            </li>

            <li className="mb-12">
            <form>
            <Link href="/services" className="">
              <button className='max-w-[450px] w-[450px] h-16 bg-blue-400 hover:bg-blue-500 transition-colors duration-300 px-2 py-1 text-white border rounded-full'>
                Our Services</button>
            </Link>
          </form>
            </li>

            <li className="mb-12">
            <form>
            <Link href="/team" className="">
              <button className='max-w-[450px] w-[450px] h-16 bg-blue-400 hover:bg-blue-500 transition-colors duration-300 px-2 py-1 text-white border rounded-full'>
                Meet the Team</button>
            </Link>
          </form>
            </li>

            <li className="mb-12">
            <form>
            <Link href="/blog" className="">
              <button className='max-w-[450px] w-[450px] h-16 bg-blue-400 hover:bg-blue-500 transition-colors duration-300 px-2 py-1 text-white border rounded-full'>
                Blog</button>
            </Link>
          </form>
            </li>

            <li className="mb-12">
            <form>
            <Link href="/contact" className="">
              <button className='max-w-[450px] w-[450px] h-16 bg-blue-400 hover:bg-blue-500 transition-colors duration-300 px-2 py-1 text-white border rounded-full'>
                Contact Us</button>
            </Link>
          </form>
            </li>

           
          </ul>
          
        </div>
      </div>
    );
    
  


}
