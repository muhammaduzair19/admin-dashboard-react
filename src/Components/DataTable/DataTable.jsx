
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import './DataTable.css'
import { Link } from 'react-router-dom';


function DataTable({ columns, rowData, slug }) {

    const deleteHandler = (id) => {
        // delete item
        console.log(id);
    }

    const actionColumn = [
        {
            field: 'action', headerName: 'Actions', width: 80,
            renderCell: (params) => {
                return (
                    <div className="actions">

                        {
                            slug && (<Link to={`${slug}/${params.row.id}`} >
                                <img className='view' src='/images/view.png' alt="" />
                            </Link>
                            )
                        }


                        <div className="delete" onClick={() => deleteHandler(params.row.id)}>
                            <img src='/images/delete.png' alt="" />
                        </div>
                    </div>
                )
            }
        },
    ]


    return (
        <div className='dataTable'>

            <DataGrid
                className='dataGrid'
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    }
                }}


                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector


                rows={rowData}
                columns={[...columns, ...actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
            />


        </div>
    )
}

export default DataTable