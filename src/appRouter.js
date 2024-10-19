import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/layout/layout";
import { MyContext } from "./MyContext";
import { useContext, useEffect, useState } from "react";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import axios from "axios";

const AppRouter = () => {

    const { state } = useContext(MyContext);
    const [taskList, setTaskList] = useState([]);
        
    const fetchItems = async () => {
        try{
        const res = await axios.get('http://localhost:3333/api/tasks_list');
        setTaskList(res.data);
        }
        catch(error){
        console.error('Error adding task:', error);
        }
    }



    useEffect(() => {
      fetchItems();
    }, []);

    return(
        <div className={`h-screen w-screen overflow-hidden ${state.theme.value ? 'dark' : 'light'}`}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/" element={<Home list={taskList}/>}/>
                        <Route path="/add-new" element={<AddEdit list={taskList}/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>  
    )
}
export default AppRouter;

