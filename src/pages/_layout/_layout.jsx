import {Navbar} from "../../components/index.js";
import {Outlet} from "react-router-dom";

function _Layout() {
  return (
    <div>
      <Navbar/>
      <main className={"mx-auto w-10/12"}>
        <Outlet/>
      </main>
    </div>
  );
}

export default _Layout;