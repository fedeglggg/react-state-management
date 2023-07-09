"use client"
import { createContext, useEffect, useState } from 'react';
import { rows as fetchedRows } from "./data.js"
import AlertDialog from './modal';
import Datagrid from './datagrid';

type contextType = {
  rows: any;
  setRows: any;
}

type rowType = {
  id: number;
  lastName: string;
  firstName: string | null;
  age: number | null;
};

export const RowsContext = createContext<contextType>({ rows: null, setRows: null });

/* Partiendo de una lista  */
export default function Page() {
  const [rows, setRows] = useState<rowType[]>([]);

  useEffect(() => {
    /* Simulo fetch en effect */
    setRows(fetchedRows)
  }, [])

  console.log("Rendered Page")

  return (
    <RowsContext.Provider value={{rows, setRows}}>
      <Datagrid />
      <AlertDialog />
    </RowsContext.Provider>
  )
} 
