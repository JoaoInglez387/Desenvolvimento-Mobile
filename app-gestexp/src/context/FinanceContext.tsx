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

    resumoGeral: (lista: Item[]) => {
        totalEntrada: number;
        totalSaida: number;
        saldo: number;
        quantidadeEntrada: number;
        quantidadeSaida: number;
    };

    resumoMensal: (lista: Item[], mes: number, ano: number) => {
        totalEntrada: number;
        totalSaida: number;
        saldo: number;
        quantidadeEntrada: number;
        quantidadeSaida: number;
    };

    resumoDiario: (lista: Item[], dia: Date) => {
        totalEntrada: number;
        totalSaida: number;
        saldo: number;
        quantidadeEntrada: number;
        quantidadeSaida: number;
    };
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

    function resumoGeral(lista: Item[]) {
        const entradas = lista.filter(i => i.tipo === "Entrada");
        const saidas = lista.filter(i => i.tipo === "Saída");

        const totalEntrada = entradas.reduce((s, i) => s + i.valor, 0);
        const totalSaida = saidas.reduce((s, i) => s + i.valor, 0);

        return {
            totalEntrada,
            totalSaida,
            saldo: totalEntrada - totalSaida,
            quantidadeEntrada: entradas.length,
            quantidadeSaida: saidas.length
        };
    }

    function resumoMensal(lista: Item[], mes: number, ano: number) {
        const filtrado = lista.filter(i =>
            i.data.getMonth() === mes && i.data.getFullYear() === ano
        );

        return resumoGeral(filtrado);
    }

    function resumoDiario(lista: Item[], dia: Date) {
        const filtrado = lista.filter(i =>
            i.data.toDateString() === dia.toDateString()
        );

        return resumoGeral(filtrado);
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
            value={{
                list,
                addItem,
                setList,
                totalEntrada,
                totalSaida,
                saldo,
                resumoGeral,
                resumoMensal,
                resumoDiario
            }}
        >
            {children}
        </FinanceContext.Provider>
    );
    
}

export function useFinance() {
    const context = useContext(FinanceContext);

    if (!context) {
        throw new Error("useFinance must be used inside FinanceProvider");
    }

    return context;
}