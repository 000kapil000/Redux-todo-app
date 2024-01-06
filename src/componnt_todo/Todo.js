import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Remove, update_data } from '../redux_todo/actions/action';
function Todo() {
    const { user_data } = useSelector((state) => state.todoreducer)
    const [showeye, setShowEye] = useState(false)
    const [showeyevalue, setShowEyeValue] = useState("")
    //edit functionality state
    const [show, setShow] = useState(false )
    const [updat, setUpdate] = useState("")
    const [ind, setInd] = useState("")

    console.log(user_data);
    const dispatch = useDispatch()
//DELETE FINCTION
    const remove = (id) => {
        console.log(id);

        dispatch(Remove(id))
    }
    const handleClose = () => setShow(false);
    const handleShow = (ele) => {
        setShow(true)
        setUpdate(ele)
    }
//UPDATE FUNCTION
    function user_task_updat(){
         dispatch(update_data(updat,ind))
    handleClose()
        }
    return (
        <>
            <div className='todo_data col-lg-5 mx-auto mt-2'>
                {
                    user_data.map((ele, k) => {
                        return (
                            <>
                                <div className='todo_container mb-2  d-flex justify-content-between align-items-center px-2' style={{ background: "#dcdde1", borderRadius: "3px", height: "45px" }} key={k}>
                                    <li style={{ listStyle: "none" }}>{ele}</li>
                                    <div className='edit_dlt col-lg-3 px-2 d-flex justify-content-between align-items-center'>
                                        <EditIcon style={{ color: "#3c40c6", cursor: "pointr" }}
                                            onClick={() => {
                                                handleShow(ele)
                                                setInd(k)
                                            }} />
                                        <DeleteIcon style={{ color: "red", cursor: "pointr" }} onClick={() => remove(k)} />
                                        <RemoveRedEyeIcon onClick={() => {
                                            setShowEye(true)
                                            setShowEyeValue(ele)
                                        }} style={{ color: "#1dd1a1", cursor: "pointr" }} />
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

                <Modal show={showeye}>

                    <h1 className='text-center '>{showeyevalue}</h1>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { setShowEye(false) }}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={show} onHide={handleClose}>
                    <h3 className='text-center mt-2'>Update your Task</h3>
                    <Modal.Header >
                    <div className='todo col-lg-5 mx-auto d-flex justify-content-between align-itms-center'>
            <input name='task' value={updat} 
            onChange={(e)=>setUpdate(e.target.value)} className='form-control col-lg-5 mt-2'  />
           </div>
                    </Modal.Header>
                    <Modal.Footer >
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={()=>user_task_updat()}>
                            Save Changes
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}


export default Todo