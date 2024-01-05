
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";


const SharedLayout = () => {
  return (
    <>
    <Navbar/>
  <main>
      <section>
            <Outlet/>
      </section>
  </main>
    </>
  )
}
export default SharedLayout

