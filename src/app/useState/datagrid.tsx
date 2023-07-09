"use client"
import { columns as baseColumns } from "./data.js"
import { DataGrid as DataGridMui } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


/* Partiendo de una lista  */
export default function Datagrid({ rows, setRows }: { rows: any[], setRows: Function }) {
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
            setRows((currentRows: any) => 
              currentRows.filter((node:any) => node.id !== params.id)
            )
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
        rows={rows}
        columns={columns}
        checkboxSelection />
    </Box>
  )
} 
