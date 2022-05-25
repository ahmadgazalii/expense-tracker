import React from 'react';
import './App.css';
import {Header} from "./components/Header"
import {Balance} from './components/Balance'
import {IncomeExpense} from './components/IncomeExpense'
import {History} from './components/History';
import {AddTransaction } from './components/AddTransaction'
import {GlobalProvider} from './context/GlobalState'




function App() {
  return (
  
        <GlobalProvider>
    <Header/>
    <div className='contanier' >
     
     <IncomeExpense/>
     <Balance/>
     <History/>
     <AddTransaction/>
     
    </div>
    </GlobalProvider>  
   


  );
}

export default App;
