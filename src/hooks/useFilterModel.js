import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useFilterModel = (gridApi) => {
  //DATA OF GRID
  const location = useLocation();
  const { pathname } = location;

  const getFilterModel = (model) => {
    if (model === 'dispatch-sent') {
      return {
        dispatch: {
          values: ['sent'],
        },
      };
    } else if (model === 'dispatch-not-sent') {
      return {
        dispatch: {
          values: ['not-sent'],
        },
      };
    } else if (model === 'status-reminders') {
      return {
        status: {
          values: ['1st-reminder', '2nd-reminder', '3rd-reminder', 'formal-notice', 'pursuit'],
        },
      };
    }
    else if (model === 'dispatch-error') {
      return {
        dispatch: {
          values: ['error'],
        },
      };
    }
    return {};
  };

  const handleSendFilter = useCallback(
    (model) => {
      if (gridApi) {
        gridApi.setFilterModel(getFilterModel(model));
      }
    },
    [gridApi]
  );

  useEffect(() => {
    if (pathname === '/billing') {
      handleSendFilter(null);
    } else if (pathname === '/billing/send') {
      handleSendFilter('dispatch-not-sent');
    } else if (pathname === '/billing/sent') {
      handleSendFilter('dispatch-sent');
    }
    else if (pathname === '/billing/reminders') {
      handleSendFilter('status-reminders');
    } else if (pathname === '/billing/errors') {
      handleSendFilter('dispatch-error');
    }
  }, [pathname, handleSendFilter]);
};
