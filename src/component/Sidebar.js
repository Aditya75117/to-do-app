const Sidebar = ({onButonClick, selectedStatus}) => {
    return(
        <aside className="sidebar">
            <div className="sidebar-inner">
                <button type='button' onClick={()=>onButonClick('all')} className={`${selectedStatus === 'all'? 'active' : null}  tab-btn`}>All Task</button>
                <button type='button' onClick={()=>onButonClick('pending')} className={`${selectedStatus === 'pending'? 'active' : null} tab-btn`}>Pending</button>
                <button type='button' onClick={()=>onButonClick('progress')} className={`${selectedStatus === 'progress'? 'active' : null} tab-btn`}>In Progress</button>
                <button type='button' onClick={()=>onButonClick('completed')} className={`${selectedStatus === 'completed'? 'active' : null} tab-btn`}>Completed</button>
                <button type='button' onClick={()=>onButonClick('deleted')} className={`${selectedStatus === 'deleted'? 'active' : null} tab-btn`}>Deleted</button>
            </div>        
        </aside>
    )
}
export default Sidebar;
