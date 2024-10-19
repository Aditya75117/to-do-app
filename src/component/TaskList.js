import Edit  from '../assets/images/edit.png';
import Delete  from '../assets/images/delete.png';
import Task  from '../assets/images/task.png';
import { useNavigate } from 'react-router-dom';


const TaskList = ({taskItems, filteredList}) => {
    
    const navigate = useNavigate();
    const handleTaskEdit = (id) => {
        // navigate("/add-new", { state: id });
        console.log(id,"iddd");
        
        navigate(`/add-new?edit=${id}`);
      }
    return(
        <>
            <div className="task-list-wrpr">
                <table className="task-table">
                    <thead className="thead">
                        <tr className="tr">
                            <th className="th">Name</th>
                            <th className="th">Desciption</th>
                            <th className="th">Type</th>
                            <th className="th">Priority</th>
                            <th className="th">Status</th>
                            <th className="th">Create at</th>
                            <th className="th">Action</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {
                            filteredList === 'all' ?
                            (
                                taskItems.list && taskItems.list.length > 0 ?
                                taskItems.list?.map((item,i)=>(
                                <tr key={i} className="tr">
                                    <td className="td">{item.taskName}</td>
                                    <td className="td">{item.taskDescription}</td>
                                    <td className="td">{item.taskType}</td>
                                    <td className="td">{item.taskPriority}</td>
                                    <td className="td">{item.taskStatus}</td>
                                    <td className="td">{item.createdAt}</td>
                                    <td className="td">
                                        <div className='flex gap-2 justify-center'>
                                            <button className="task-action-btn edit" type="button" onClick={()=> handleTaskEdit(item.taskId)}>
                                                <img src={Edit} alt="edit" className="action-icon max-w-6"/>
                                            </button>
                                            <button className="task-action-btn delete" type="button">
                                                <img src={Delete} alt="edit" className="action-icon max-w-6"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                ))
                                :
                                <tr>
                                    <td colSpan={7} className='td'>
                                        <div className='no-item-card'> 
                                            <img src={Task} alt='No item' className='max-w-24 mx-auto'/>
                                            <h4 className='no-item-title'>No item available</h4>
                                            <p className='no-item-desc'>Items will show here when you add any item.</p>
                                        </div>    
                                    </td>
                                </tr>
                            )
                            :
                            (
                                taskItems.list && taskItems.list.filter((key) => key.status === filteredList).length > 0 ? (
                                    taskItems.list?.filter((key)=> key.status  === filteredList)?.map((item,i)=>
                                    (
                                    <tr key={i} className="tr">
                                        <td className="td">{item.taskName}</td>
                                        <td className="td">{item.taskDescription}</td>
                                        <td className="td">{item.taskType}</td>
                                        <td className="td">{item.taskPriority}</td>
                                        <td className="td">{item.taskStatus}</td>
                                        <td className="td">{item.createdAt}</td>
                                        <td className="td">
                                            <div className='flex gap-2 justify-center'>
                                                <button className="task-action-btn edit" type="button">
                                                    <img src={Edit} alt="edit" className="action-icon max-w-6"/>
                                                </button>
                                                <button className="task-action-btn delete" type="button">
                                                    <img src={Delete} alt="edit" className="action-icon max-w-6"/>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    ))
                                )
                                :
                                <tr>
                                    <td colSpan={7} className='td'>
                                        <div className='no-item-card'> 
                                            <img src={Task} alt='No item' className='max-w-24 mx-auto'/>
                                            <h4 className='no-item-title'>No item available</h4>
                                            <p className='no-item-desc'>Items will show here when you move your item to {filteredList}.</p>
                                        </div>    
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default TaskList;