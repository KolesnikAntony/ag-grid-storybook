import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
// import ButtonView from '../../buttons/button-view';
// import ButtonSend from '../../buttons/button-send';
// import ButtonPrint from '../../buttons/button-print';
import SendIcon from '@mui/icons-material/Send';
import PrintIcon from '@mui/icons-material/Print';
import { IconButton } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';

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
  if (props.enableMenu) {
    menu = (
      <div ref={refButton} className="customHeaderMenuButton" onClick={() => onMenuClicked()}>
        <i className={`fa ${props.menuIcon}`}></i>
      </div>
    );
  }

  let sort = null;
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

    console.log(props.api.getRenderedNodes())
    console.log(props.columnApi.getValueColumns())

  const { column } = props;

  return (
    <div>
      {menu}
      <Choose>
        <When condition={column.colId === 'dispatch'}>
          D
        </When>
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
