import React, { useState } from 'react'
import { Button } from '@mui/material'
// import { Button } from 'bootstrap'
import AddIcon from '@mui/icons-material/Add';
import Todo from './Todo';
import { Add } from '../redux_todo/actions/action';
import { useDispatch } from 'react-redux';
function Home() {
  const dispatch=useDispatch();
  const [data,setData]=useState()
  console.log(data);

  function addData(){
 dispatch(Add(data  ))
 setData("")
  }

  return (
    <>
      <div className='container'>
        <section className='mt-3 text-center'>
          <h3>Enter Your Task</h3>

          <div className='todo col-lg-5 mx-auto d-flex justify-content-between align-itms-center'>
            <input name='task' value={data} onChange={(e)=>setData(e.target.value)} className='form-control' />
            <Button variant='contained' className='mx-2' style={{ background: "#ee5253" }}  onClick={()=>addData()}>
              <AddIcon />
            </Button>
          </div>
        </section>
        <Todo />
      </div>
    </>
  )
}

export default Home