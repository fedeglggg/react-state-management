"use client"
import { useEffect, useState } from 'react';
import { rows as fetchedRows } from "./data.js"
import AlertDialog from './modal';
import Datagrid from './datagrid';

type rowType = {
  id: number;
  lastName: string;
  firstName: string | null;
  age: number | null;
};


/* Partiendo de una lista  */
export default function Page() {
  const [rows, setRows] = useState<rowType[]>([]);

  useEffect(() => {
    /* Simulo fetch en effect */
    setRows(fetchedRows)
  }, [])

  console.log("Rendered Page")

  return (
    <>
      <Datagrid rows={rows} setRows={setRows} />
      <AlertDialog rows={rows} setRows={setRows} />
    </>
  )
} 
