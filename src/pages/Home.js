import { useContext, useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import TaskList from "../component/TaskList";
import { MyContext } from "../MyContext";

const Home = () => {

    const todoList = [
        {
          name: "Task 1",
          description: "Complete project documentation",
          type: "Work",
          status:'pending',
          priority: "high",
          createdAt: "2024-08-01"
        },
        {
          name: "Task 2",
          description: "Buy groceries",
          type: "personal",
          status:'pending',
          priority: "medium",
          createdAt: "2024-08-02"
        },
        {
          name: "Task 3",
          description: "Schedule dentist appointment",
          type: "Health",
          status:'pending',
          priority: "low",
          createdAt: "2024-08-03"
        },
        {
          name: "Task 4",
          description: "Prepare for meeting",
          type: "Work",
          status:'pending',
          priority: "high",
          createdAt: "2024-08-04"
        },
        {
          name: "Task 5",
          description: "Clean the house",
          type: "personal",
          status:'completed',
          priority: "low",
          createdAt: "2024-08-05"
        },
        {
          name: "Task 6",
          description: "Update LinkedIn profile",
          type: "personal",
          status:'pending',
          priority: "medium",
          createdAt: "2024-08-06"
        },
        {
          name: "Task 7",
          description: "Submit tax returns",
          type: "Finance",
          status:'pending',
          priority: "high",
          createdAt: "2024-08-07"
        },
        {
          name: "Task 8",
          description: "Plan weekend trip",
          type: "personal",
          status:'pending',
          priority: "low",
          createdAt: "2024-08-08"
        },
        {
          name: "Task 9",
          description: "Research new project ideas",
          type: "Work",
          status:'pending',
          priority: "medium",
          createdAt: "2024-08-09"
        },
        {
          name: "Task 10",
          description: "Pay utility bills",
          type: "Finance",
          status:'pending',
          priority: "high",
          createdAt: "2024-08-10"
        },
        {
          name: "Task 11",
          description: "Write blog post",
          type: "personal",
          status:'pending',
          priority: "medium",
          createdAt: "2024-08-11"
        },
        {
          name: "Task 12",
          description: "Attend networking event",
          type: "Work",
          status:'pending',
          priority: "low",
          createdAt: "2024-08-12"
        },
        {
          name: "Task 13",
          description: "Read a book",
          type: "personal",
          status:'pending',
          priority: "low",
          createdAt: "2024-08-13"
        },
        {
          name: "Task 14",
          description: "Fix bug in codebase",
          type: "Work",
          status:'pending',
          priority: "high",
          createdAt: "2024-08-14"
        },
        {
          name: "Task 15",
          description: "Organize office space",
          type: "Work",
          status:'pending',
          priority: "medium",
          createdAt: "2024-08-15"
        },
        {
          name: "Task 16",
          description: "Meal prep for the week",
          type: "personal",
          status:'pending',
          priority: "low",
          createdAt: "2024-08-16"
        },
        {
          name: "Task 17",
          description: "Review team performance",
          type: "Work",
          status:'pending',
          priority: "high",
          createdAt: "2024-08-17"
        },
        {
          name: "Task 18",
          description: "Call parents",
          type: "personal",
          status:'pending',
          priority: "medium",
          createdAt: "2024-08-18"
        },
        {
          name: "Task 19",
          description: "Research investment options",
          type: "Finance",
          status:'pending',
          priority: "high",
          createdAt: "2024-08-19"
        },
        {
          name: "Task 20",
          description: "Update project timeline",
          type: "Work",
          status:'pending',
          priority: "medium",
          createdAt: "2024-08-20"
        }
      ];
    
    const [taskList, setTaskList] = useState(todoList);
    const { state, dispatch } = useContext(MyContext);

    useEffect(() => {
        setTaskList(todoList);
    }, []);

    const handleTabButtonClick = (e) => {
      dispatch({ type: 'TAB_NAME', payload: e });
    }
    return (
        <>
            <section className="home-sec">
                <Sidebar onButonClick={handleTabButtonClick} selectedStatus={state.tab.value}/>
                <div className="task-list-container">
                    <TaskList filteredList={state.tab.value} taskItems={taskList}/>
                </div>
            </section>
        </>
    )
}
export default Home;