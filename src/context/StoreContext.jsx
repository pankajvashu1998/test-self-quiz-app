import { createContext } from "react";
import { computerQuestion } from "../assets/computerQuestion";
import { gkQuestion } from "../assets/gkQuestion";

export const StoreContext = createContext(null)


const ContextProvider = (props)=>{

    const ContextValue = {
        // computerQuestion,
        // gkQuestion
    }

    return(
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default ContextProvider