import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
// import ButtonView from '../../buttons/button-view';
// import ButtonSend from '../../buttons/button-send';
// import ButtonPrint from '../../buttons/button-print';
import SendIcon from '@mui/icons-material/Send';
import PrintIcon from '@mui/icons-material/Print';
import useStyle from './custom-header-style';
import useStyle2 from '../../grid-cell-rerenderer/cellRendererStyle';

export default (props) => {
  const sx = useStyle();
  const sx2 = useStyle2();
  const [ascSort, setAscSort] = useState('inactive');
  const [descSort, setDescSort] = useState('inactive');
  const [noSort, setNoSort] = useState('inactive');
  const refButton = useRef(null);

  const onMenuClicked = () => {
    props.showColumnMenu(refButton.current);
  };

  const onSortChanged = useCallback(() => {
    setAscSort(props.column.isSortAscending() ? 'active' : 'inactive');
    setDescSort(props.column.isSortDescending() ? 'active' : 'inactive');
    setNoSort(!props.column.isSortAscending() && !props.column.isSortDescending() ? 'active' : 'inactive');
  }, [props]);

  const onSortRequested = (order, event) => {
    props.setSort(order, event.shiftKey);
  };

  useEffect(() => {
    props.column.addEventListener('sortChanged', onSortChanged);
    onSortChanged();
  }, [onSortChanged, props]);

  let menu = null;
  // console.log(props.enableMenu)
  if (props.enableMenu) {
    menu = (
      <Box sx={sx.menu} ref={refButton} className="customHeaderMenuButton" onClick={() => onMenuClicked()}>
        {/* <i className={`fa ${props.menuIcon}`}></i>
        <MenuIcon fontSize={'small'} color={'#bcbccb'} /> */}
      </Box>
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
    <Fragment>
      {menu}
      <div className="customHeaderLabel">{props.displayName}</div>
      {/* <Choose>
        <When condition={column.colId === 'btn-view'}>
          <Box />
        </When>
        <When condition={column.colId === 'btn-send'}>
          <Button variant="contained" sx={sx2.cellButton} onClick={() => {}} aria-label="Send selected invoices">
            <SendIcon sx={sx2.cellButtonIcon} />
          </Button>
        </When>
        <When condition={column.colId === 'btn-print'}>
          <Button variant="contained" sx={sx2.cellButton} onClick={() => {}} aria-label="Print selected invoices">
            <PrintIcon sx={sx2.cellButtonIcon} />
          </Button>
        </When>
        <Otherwise>
          <div className="customHeaderLabel">{props.displayName}</div>
        </Otherwise>
      </Choose> */}
      {sort}
    </Fragment>
  );
};
