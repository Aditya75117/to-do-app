import { useContext } from "react";
import Sidebar from "../component/Sidebar";
import TaskList from "../component/TaskList";
import { MyContext } from "../MyContext";

const Home = (list) => {
  const { state, dispatch } = useContext(MyContext);

    const handleTabButtonClick = (e) => {
      dispatch({ type: 'TAB_NAME', payload: e });
    }
    return (
        <>
            <section className="home-sec">
                <Sidebar onButonClick={handleTabButtonClick} selectedStatus={state.tab.value}/>
                <div className="task-list-container">
                    <TaskList filteredList={state.tab.value} taskItems={list}/>
                </div>
            </section>
        </>
    )
}
export default Home;