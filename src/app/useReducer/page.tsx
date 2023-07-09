"use client"
import { useEffect, useReducer, useState } from 'react';
import { rows as fetchedRows } from "./data.js"
import AlertDialog from './modal';
import Datagrid from './datagrid';

function reducer(state: any, action: any) {
  switch (action.type) {
    case "cleanRows":
      return []
    case "removeRow":
      const rows = [...state]
      return rows.filter((node) => node.id !== action.rowId)
    case "setRows":
      return action.data
    default:
      return []
  }
}

/* Partiendo de una lista  */
export default function Page() {
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    /* Simulo fetch en effect */
    dispatch({ type: "setRows", data: fetchedRows})
  }, [])

  console.log("Rendered Page")

  return (
      <>
        <Datagrid state={state} dispatch={dispatch} />
        <AlertDialog state={state} dispatch={dispatch} />
      </>
  )
} 
