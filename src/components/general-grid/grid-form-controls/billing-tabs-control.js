import React, { useCallback } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Button, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useTabsView } from '../../../hooks/grid/useTabsView';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from '../../../store/store';
import { filterTabAC } from '../../../features/new-tab-feature/action-creators/filter-tab-action-creaters';
import Box from '@mui/material/Box';
import { HELPERS as helpres } from '../../../helpers/helpers';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { useCallToolPanel } from '../../../hooks/grid/useCallToolPanel';
import AddIcon from '@mui/icons-material/Add';

const BillingTabsControl = () => {
  const [tabs, handleShowTabs] = useTabsView();
  const def = [1, 2, 3, 4];
  const dispatch = useDispatch();

  const handleRemove = useCallback(
    (id) => {
      dispatch(filterTabAC.removeTab(id));
    },
    [dispatch]
  );

  //DND
  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const newOrderItems = helpres.reorder(tabs, result.source.index, result.destination.index);
    dispatch(filterTabAC.setTabs(newOrderItems));
    // setItems(newOrderItems);
  };

  //SIDEBAR TOOLS HANDLER
  const openFilterHandler = useCallToolPanel('custom-tab');

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content-1" id="panel1a-header-1">
        <Typography>Tabs</Typography>
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
                <For of={tabs} each="item" index="index">
                  <Draggable key={item.title + index} draggableId={`${item.id}-dbl`} index={index}>
                    {(provided, snapshot) => (
                      <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        // style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                      >
                        <DragIndicatorIcon sx={{ mr: 2 }} />
                        <FormControlLabel
                          control={<Checkbox checked={item.view} onChange={(e) => handleShowTabs(e, item.title)} />}
                          label={item.title}
                          labelPlacement="end"
                        />
                        {!def.includes(item.id) && (
                          <IconButton onClick={() => handleRemove(item.id)}>
                            <DeleteIcon />
                          </IconButton>
                        )}
                      </Box>
                    )}
                  </Draggable>
                </For>
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <Button startIcon={<AddIcon />} onClick={openFilterHandler}>
          Add new tab
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};

export default BillingTabsControl;
