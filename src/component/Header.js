import logo from "../assets/images/to-do-list.png";
import moon from "../assets/images/moon.png";
import sun from "../assets/images/sun.png";
import { MyContext } from "../MyContext";
import { useContext } from "react";

const Header = () => {
    
  const { state, dispatch } = useContext(MyContext);

    return (
        <header className="header">
            {/* <div className="container"> */}
                <div className="header-row">
                    <a href="/" className="logo-wrpr">
                        <img src={logo} className="img-fluid logo"/>
                    </a>
                    <div className="header-right">
                        <a href="/add-new" className="header-link">+ Add New</a>
                        <button type="button" className="theme-icon-btn" onClick={() => dispatch({ type: 'TOGGLE_VALUE' })}>
                            <img src={state.theme.value ? sun : moon} className={`theme-icon img-fluid ${state.theme.value ? 'sun' : 'moon'}`}/>
                        </button>
                    </div>
                </div>
            {/* </div> */}
        </header>
    )
}

export default Header;