import { useCallback, useEffect, useState } from 'react';

export const useFilter = (rowData) => {
  const [filteredData, setFilteredData] = useState(rowData);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const value = searchValue.toLowerCase();
    const filterHandler = () => {
      const filteredList = rowData.filter(
        (el) => el.client.toLowerCase().includes(value) || el.guarantor.toLowerCase().includes(value)
      );
      if (value) {
        setFilteredData(filteredList);
      } else {
        setFilteredData(rowData);
      }
    };
    const timer = setTimeout(filterHandler, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue, rowData]);

  const searchChangeHandler = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  return [filteredData, searchValue, searchChangeHandler];
};
