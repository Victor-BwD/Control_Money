import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal';
import { GlobalStyle } from "./styles/global";
import { useState } from "react";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloneNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }

  return (
    <>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} /> 
        <Dashboard/>
        <Modal 
          isOpen={isNewTransactionModalOpen} 
          onRequestClose={handleCloneNewTransactionModal}
          >
              <h2>Cadastrar Transação</h2>
          </Modal>
        <GlobalStyle/>
    </>
  );
}

