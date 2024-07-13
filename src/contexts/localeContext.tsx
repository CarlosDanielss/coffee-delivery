import { ReactNode, createContext, useEffect, useState } from "react";

export interface ListStateProps {
  id: number;
  nome: string;
  regiao: object;
  sigla: string;
}

interface StateProps {
  selectedState: string | null;
  listAllStates: ListStateProps[];
}

interface CompleteAddressProps {
  cep: string;
  street: string;
  number: string;
  fullAdrress?: string;
  neighborhood: string;
  city: string;
  uf: string;
}

interface LocaleContextType {
  state: StateProps;
  completeAddress: CompleteAddressProps;
  selectState: (id: number) => void;
  clearSelectedState: () => void;
  setFullAddress: (data: CompleteAddressProps) => void;
}

export const LocaleContext = createContext({} as LocaleContextType);

interface LocaleContextProviderProps {
  children: ReactNode;
}

export function LocaleContextProvider({
  children,
}: LocaleContextProviderProps) {
  const [state, setState] = useState<StateProps>(() => {
    const storedStateAsJSON = localStorage.getItem(
      "@coffee-delivery:locale-state-1.0.0"
    );

    if (storedStateAsJSON) {
      return {
        selectedState: JSON.parse(storedStateAsJSON),
        listAllStates: [],
      };
    }

    return {
      selectedState: null,
      listAllStates: [],
    };
  });

  const [completeAddress, setCompleteAddress] = useState<CompleteAddressProps>({
    cep: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    uf: "",
  });

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => response.json())
      .then((data) => setState((prev) => ({ ...prev, listAllStates: data })));
  }, []);

  useEffect(() => {
    const stateJSON = JSON.stringify(state.selectedState);

    localStorage.setItem("@coffee-delivery:locale-state-1.0.0", stateJSON);
  }, [state]);

  function selectState(id: number) {
    const filterStateSelected = state.listAllStates.find((items) => {
      return items.id === id;
    });

    const { nome, sigla } = filterStateSelected!;

    const nameStateConcatenated = `${nome}, ${sigla}`;

    setState((prev) => ({ ...prev, selectedState: nameStateConcatenated }));
  }

  function clearSelectedState() {
    setState((prev) => ({ ...prev, selectedState: null }));
  }

  function setFullAddress(data: CompleteAddressProps) {
    setCompleteAddress(data);
  }

  return (
    <LocaleContext.Provider
      value={{
        state,
        completeAddress,
        selectState,
        clearSelectedState,
        setFullAddress
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}
