import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useColumnView } from '../../../../hooks/grid/useColumnView';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Box from '@mui/material/Box';
import { HELPERS as helpres } from '../../../../helpers/helpers';

const ColumnControls = ({ columnApi }) => {
  const [column, handleShowColumn, handleColumnOrder] = useColumnView(columnApi);
  //DND
  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const newOrderItems = helpres.reorder(column, result.source.index, result.destination.index);
    handleColumnOrder(newOrderItems);
    // dispatch(filterTabAC.setTabs(newOrderItems));
    // setItems(newOrderItems);
  };
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content-2" id="panel1a-header-2">
        <Typography>Columns</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                // style={getListStyle(snapshot.isDraggingOver)}
              >
                <Stack spacing={1}>
                  <For of={Object.keys(column)} each="key" index="index">
                    <Draggable key={key + index} draggableId={`${key}-dbl`} index={index}>
                      {(provided, snapshot) => (
                        <Box
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          // style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                        >
                          <FormControlLabel
                            key={key + index}
                            value={key}
                            control={<Checkbox checked={column[key]} onChange={(e) => handleShowColumn(e, key)} />}
                            label={key.toUpperCase()}
                            labelPlacement="end"
                          />
                        </Box>
                      )}
                    </Draggable>
                  </For>
                </Stack>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </AccordionDetails>
    </Accordion>
  );
};

ColumnControls.propTypes = {
  columnApi: PropTypes.object.isRequired,
};

export default ColumnControls;
