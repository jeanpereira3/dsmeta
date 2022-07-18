import Header from "./components/Header"
import ModalSms from "./components/ModalSms"
import SalesCard from "./components/SalesCard"
import Modal from 'react-modal'
import { useState } from 'react'

Modal.setAppElement('#root')

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
      </main>

    </>
  )
}

export default App
