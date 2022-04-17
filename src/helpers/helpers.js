export const HELPERS = {
  convertRemToPx: (rem) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize),
  getRowStyle: (params) => {
    if (params.data.isDeleted) {
      return { background: 'rgba(112,3,16,0.4)', pointerEvents: 'none' };
    }

    if (params.data.isDisabled) {
      return { background: 'rgba(87,94,86,0.4)', pointerEvents: 'none' };
    }

    if (params.data.isUpdated) {
      return { background: 'rgba(46,173,31,0.4)' };
    }
    if (params.data.isError) {
      return { background: 'rgba(252, 69, 3, 0.4)', color: 'red' };
    }
  },
  getFilterModel: (tab) => {
    switch (tab) {
      case 1:
        return {
          dispatch: {
            values: ['sent'],
          },
        };
      case 2:
        return {
          dispatch: {
            values: ['not-sent'],
          },
        };
      case 3:
        return {
          status: {
            values: ['1st-reminder', '2nd-reminder', '3rd-reminder', 'formal-notice', 'pursuit'],
          },
        };
      case 4:
        return {
          dispatch: {
            values: ['error'],
          },
        };
      default:
        return {};
    }
  },
};
