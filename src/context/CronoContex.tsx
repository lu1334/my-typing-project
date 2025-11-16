import { useState,useContext,createContext, type ReactNode } from "react";

interface Cronometro{
    contador:number,
    enMarcha:boolean,
    setContador:React.Dispatch<React.SetStateAction<number>>,
    setEnMarcha:React.Dispatch<React.SetStateAction<boolean>>,
    iniciar:()=>void,
    parar:()=>void,
    reset:()=>void
}

const CronoContex = createContext<Cronometro|undefined>(undefined)
export function CronoProvider({children}:{children:ReactNode}){
    const [contador, setContador] = useState(0);
    const [enMarcha, setEnMarcha] = useState(false);

    const iniciar = () => setEnMarcha(true);
    const parar = () => setEnMarcha(false);
    const reset = () => {
      setEnMarcha(false);
      setContador(0);
    };

    return(
        <CronoContex.Provider value={{contador,setContador,enMarcha,setEnMarcha,iniciar,parar,reset}}>
            {children}
        </CronoContex.Provider>
    )
}

export const useCronometro = ()=>{
    const res = useContext(CronoContex)
    if(!res){
        throw new Error("useCronometro debe usarse dentro de un CronoProvider")
    }
    return res
}
