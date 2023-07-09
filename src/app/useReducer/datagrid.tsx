"use client"
import { columns as baseColumns } from "./data.js"
import { DataGrid as DataGridMui } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


/* Partiendo de una lista  */
export default function Datagrid({state, dispatch}: {state:any, dispatch:any}) {


  console.log("Rendered Datagrid")


  const columns = [...baseColumns, {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    width: 100,
    cellClassName: 'actions',
    renderCell: (params: any) => (
      <strong>
        <Button
          variant="contained"
          size="small"
          style={{ marginLeft: 16 }}
          tabIndex={params.hasFocus ? 0 : -1}
          onClick={() => {
            dispatch({ type: "removeRow", rowId: params.id})
          }}
        >
          Remove  
        </Button>
      </strong>
    ),
  }]

  return (
    <Box sx={{ height: 500, maxWidth: 900 }}>
      <DataGridMui
        rows={state}
        columns={columns}
        checkboxSelection />
    </Box>
  )
} 
