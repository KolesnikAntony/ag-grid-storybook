import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
// import ButtonView from '../../buttons/button-view';
// import ButtonSend from '../../buttons/button-send';
// import ButtonPrint from '../../buttons/button-print';
import SendIcon from '@mui/icons-material/Send';
import PrintIcon from '@mui/icons-material/Print';
import { IconButton } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';
import MenuIcon from '@mui/icons-material/Menu';

export default (props) => {
  const [ascSort, setAscSort] = useState('inactive');
  const [descSort, setDescSort] = useState('inactive');
  const [noSort, setNoSort] = useState('inactive');
  const refButton = useRef(null);

  const onMenuClicked = () => {
    props.showColumnMenu(refButton.current);
  };

  const onSortChanged = () => {
    setAscSort(props.column.isSortAscending() ? 'active' : 'inactive');
    setDescSort(props.column.isSortDescending() ? 'active' : 'inactive');
    setNoSort(!props.column.isSortAscending() && !props.column.isSortDescending() ? 'active' : 'inactive');
  };

  const onSortRequested = (order, event) => {
    props.setSort(order, event.shiftKey);
  };

  useEffect(() => {
    props.column.addEventListener('sortChanged', onSortChanged);
    onSortChanged();
  }, []);

  let menu = null;
  // console.log(props.enableMenu)
  if (props.enableMenu) {
    menu = (
      <div ref={refButton} className="customHeaderMenuButton" onClick={() => onMenuClicked()}>
        {/* <i className={`fa ${props.menuIcon}`}></i> */}
        <MenuIcon fontSize={'small'} color={'#bcbccb'} />
      </div>
    );
  }

  // console.log(props)

  let sort = null;
  // console.log(props.enableSorting)
  if (props.enableSorting) {
    sort = (
      <div style={{ display: 'inline-block' }}>
        <div
          onClick={(event) => onSortRequested('asc', event)}
          onTouchEnd={(event) => onSortRequested('asc', event)}
          className={`customSortDownLabel ${ascSort}`}>
          <i class="fa fa-long-arrow-alt-down"></i>
        </div>
        <div
          onClick={(event) => onSortRequested('desc', event)}
          onTouchEnd={(event) => onSortRequested('desc', event)}
          className={`customSortUpLabel ${descSort}`}>
          <i class="fa fa-long-arrow-alt-up"></i>
        </div>
        <div
          onClick={(event) => onSortRequested('', event)}
          onTouchEnd={(event) => onSortRequested('', event)}
          className={`customSortRemoveLabel ${noSort}`}>
          <i class="fa fa-times"></i>
        </div>
      </div>
    );
  }

    // console.log(props.api.getRenderedNodes())
    // console.log(props.columnApi.getValueColumns())
    
    const { column, api } = props;
    // const [ dispatch, setDispatch ] = useState('');
    // useEffect(() => {
    //   // const arrayUslovno = props.api.getRowNode(10);
    //   let pustoyMassiv = [];
    //   const fnTamTipa = (rowNode, index) => {
    //     pustoyMassiv.push(rowNode.data.dispatch);
    //   }
    //   api.forEachNode(fnTamTipa)
    //   if (pustoyMassiv.every(el => el === 'sent')) {
    //     console.log('sent')
    //   } else if (pustoyMassiv.every(el => el === 'not-sent')) {
    //     console.log('not-sent')
    //   } else if (pustoyMassiv.every(el => el === 'error')) {
    //     console.log('error')
    //   } else {
    //     console.log('pusto')
    //   }
    // }, [api])
    // gridApi.forEachNode(node => {
    //   if (node.data.make === 'Ford') {
    //    node.setSelected(true)
    //   }
    //  })
    // console.log('arrayUslovno', arrayUslovno)
    // console.log(column.userProvidedColDef.getQuickFilterText)
    // console.log((() => column.userProvidedColDef.getQuickFilterText = (params) => params.value.name)())

  return (
    <div>
      {menu}
      <Choose>
        {/* <When condition={column.colId === 'dispatch'}></When> */}
        <When condition={column.colId === 'btn-view'}>
          <Box />
        </When>
        <When condition={column.colId === 'btn-send'}>
          <IconButton onClick={() => {}} aria-label="send">
            <SendIcon fontSize={'small'} color={'#bcbccb'} />
          </IconButton>
        </When>
        <When condition={column.colId === 'btn-print'}>
          <IconButton onClick={() => {}} aria-label="print">
            <PrintIcon fontSize={'small'} color={'#bcbccb'} />
          </IconButton>
        </When>
        <Otherwise>
          <div className="customHeaderLabel">{props.displayName}</div>
        </Otherwise>
      </Choose>
      {sort}
    </div>
  );
};
