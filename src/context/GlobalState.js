import { createContext,useReducer } from "react";
import Reduce from "./Reduce";



const InitialState = {
    transactions: [
//   { id: 1, text: 'Flower', amount: -20 },
//   { id: 2, text: 'Salary', amount: 300 },
//   { id: 3, text: 'Book', amount: -10 },
//   { id: 4, text: 'Camera', amount: 150 }
]
}
//            (Create Context )

export const GlobalContext = createContext(InitialState);

//   (Context Provider) 

export const GlobalProvider = ({children})=> {
    const [state,dispatch]= useReducer(Reduce,InitialState);

    // action

    function deleteTransaction  (id) {
        dispatch ( {
         type:"DELETE_TRANSACTION" ,
         payload:id
        });
    }
    function addTransaction  (transaction) {
        dispatch ( {
         type:"ADD_TRANSACTION" ,
         payload: transaction
        });
    }
    

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }} >

            {children}
        </GlobalContext.Provider>
        )
}