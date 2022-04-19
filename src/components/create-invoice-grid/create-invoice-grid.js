import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useColumnDefs } from '../../hooks/useColumnDefs';
import { useDefaultColDef } from '../../hooks/useDefaultColDef';
import { GRID_TYPES } from '../../constants/grid-types';
import { STATES } from '../../api';

const CreateInvoiceGrid = ({colDef}) => {
    const columnDefs = useColumnDefs(GRID_TYPES.createInvoice);
    const defaultColDef = useDefaultColDef(colDef);
    const rowData = STATES.createInvoiceState;

    return (
        <AgGridReact 
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowData={rowData}
        />
    )
};

export default CreateInvoiceGrid;
