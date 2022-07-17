import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Header from "./components/Header"
import SalesCard from "./components/SalesCard"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="card-container">
            <SalesCard />
          </div>
        </section>
        <ToastContainer />
      </main>

    </>
  )
}

export default App
