import cellRenderer from './../components/renderer/cellRenderer';

export const FILTER_TYPES = {
  filterNumber: (field) => ({
    field,
    cellRendererFramework: cellRenderer,
    filter: 'agNumberColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
      suppressAndOrCondition: true,
    },
  }),
  filterText: (field, cellRender, isKeyCreator = false) => ({
    field,
    cellRendererFramework: cellRender,
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
      suppressAndOrCondition: true,
    },
    keyCreator: (params) => {
      return isKeyCreator ? params.value?.name : params.value;
    },
  }),
  filterDate: (field, cellRenderer, separator = '.') => ({
    field,
    cellRendererFramework: cellRenderer,
    filter: 'agDateColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
      suppressAndOrCondition: true,
      comparator: function (filterLocalDateAtMidnight, cellValue) {
        var dateAsString = cellValue;
        if (dateAsString == null) return -1;
        var dateParts = dateAsString.split(separator);
        var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));

        if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
          return 0;
        }

        if (cellDate < filterLocalDateAtMidnight) {
          return -1;
        }

        if (cellDate > filterLocalDateAtMidnight) {
          return 1;
        }
      },
      browserDatePicker: true,
    },
  }),
};
