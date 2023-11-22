import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Interface } from "readline";

interface ContextInterface {
  getResults: (data: string) => void;
  results: object | any;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateActions<string>>;
  isLoading: boolean;
}
export const ResultContext =
  createContext <
  ContextInterface >
  {
    getResults: () => {},
    searchTerm: () => {},
    setSearchTerm: () => {},
    isLoading: false,
  };
const baseUrl = "https://google-search72.p.rapidapi.com/search";

interface Props {
  children: ReactNode;
}
export const ResultContextProvider: FC<Props> = ({ children }) => {
    const [results,setResults]=useState<object>{[]};
    const [isLoading,setIsLoading]=useState<boolean>(false);
    const [searchTerm,setSearchTerm]=useState<string>("");

    const getResults=async(type:string)=>{
        setIsLoading(true);

        const response=await fetch(`${baseUrl} ${type} `,{
            method:'GET',
            headers:{
                'X-RapidAPI-Key': 'f05c0df71bmsh041d036f8862f8dp19bd95jsn51c883b68df5',
                'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
              }
        })

    }

return (
    <ResultContext.Provider>
    {children}
    </ResultContext.Provider>
)

};
