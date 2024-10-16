import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/layout/layout";
import { MyContext } from "./MyContext";
import { useContext } from "react";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";

const AppRouter = () => {

  const { state } = useContext(MyContext);

    return(
        <div className={`h-screen w-screen overflow-hidden ${state.theme.value ? 'dark' : 'light'}`}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/add-new" element={<AddEdit/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>  
    )
}
export default AppRouter;

