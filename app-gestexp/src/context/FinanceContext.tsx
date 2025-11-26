import { createContext, useContext, useState } from "react";

type Item = {
    data: Date;
    tipo: "Entrada" | "Saída";
    descricao: string;
    valor: number;
};

type FinanceContextProps = {
    list: Item[];
    addItem: (item: Item) => void;
    setList: (fn: (prev: Item[]) => Item[]) => void;
    totalEntrada: number;
    totalSaida: number;
    saldo: number;
};

const FinanceContext = createContext<FinanceContextProps | null>(null);

export function FinanceProvider({ children }: any) {
    const [list, setListState] = useState<Item[]>([]);

    function setList(fn: (prev: Item[]) => Item[]) {
        setListState(fn);
    }

    function addItem(item: Item) {
        setList(prev => [...prev, item]);
    }

    const totalEntrada = list
        .filter(i => i.tipo === "Entrada")
        .reduce((soma, i) => soma + i.valor, 0);

    const totalSaida = list
        .filter(i => i.tipo === "Saída")
        .reduce((soma, i) => soma + i.valor, 0);

    const saldo = totalEntrada - totalSaida;

    return (
        <FinanceContext.Provider
            value={{ list, addItem, setList, totalEntrada, totalSaida, saldo }}>
            {children}
        </FinanceContext.Provider>
    );
}

export function useFinance() {
    const context = useContext(FinanceContext);
    if (!context) {
        throw new Error("useFinance deve ser usado dentro de <FinanceProvider>");
    }
    return context;
}
