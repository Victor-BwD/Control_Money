import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal';
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsTable } from "./components/TransactionsTable";
import { TransactionsContext } from "./TransactionsContext";

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
    <TransactionsContext.Provider value={[]}>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} /> 
        <Dashboard/>
        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloneNewTransactionModal}
        />
        <GlobalStyle/>
    </TransactionsContext.Provider>
  );
}

