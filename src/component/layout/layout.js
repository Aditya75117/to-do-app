// import { Children } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout = () => {
    return(
        <>
            <main className="main-wrpr">
                <Header />
                <section className="main-body-wrpr">
                    <Outlet/>
                </section>

                {/* footer */}
            </main>
        </>
    )
}
export default Layout;