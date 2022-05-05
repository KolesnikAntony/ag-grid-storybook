import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack } from '@mui/material';
import Box from '@mui/material/Box';

export default forwardRef((props, ref) => {
  const { filterChangedCallback, values, typeValues, api } = props;
  const [type, setType] = useState('all');
  const namesValue = useMemo(() => values, [values]);
  const nameCheck = namesValue.map(() => true);
  const [checked, setChecked] = useState(nameCheck);

  const filterOption = useMemo(() => {
    return namesValue.filter((el, index) => checked[index]);
  }, [checked, namesValue]);

  useImperativeHandle(ref, () => {
    return {
      myMethod(model) {
        // does something
        this.setModel(model);
      },
      doesFilterPass(params) {
        const { type: guarantorType, name } = params.data.guarantor;
        if (type === 'all' && !checked.every((el) => el)) {
          return filterOption.includes(name);
        } else if (type !== 'all' && checked.every((el) => el)) {
          return guarantorType.toLowerCase() === type.toLowerCase();
        } else if (type !== 'all' && !checked.every((el) => el)) {
          return guarantorType.toLowerCase() === type.toLowerCase() && filterOption.includes(name);
        }
      },

      isFilterActive() {
        return type !== 'all' || !checked.every((el) => el);
      },
      getModel() {
        if (type === 'all') {
          return undefined;
        } else {
          return {
            type,
            values: filterOption,
          };
        }
      },
      setModel(model) {
        // console.log(model);
        if (!model) {
          setType('all');
          setChecked((prev) => prev.map(() => true));
        } else {
          setType(model.type);
          const modelVal = model.values;
          if (modelVal) {
            const newChecked = namesValue.map((el) => {
              return modelVal.indexOf(el) !== -1;
            });
            setChecked(newChecked);
          }
        }
      },
    };
  });

  useEffect(() => {
    filterChangedCallback();
  }, [type, checked, filterChangedCallback]);

  const handleChange = useCallback((e) => {
    setType(e.target.value);
  }, []);

  const handleChangeChild = (index) => {
    return (event) => {
      setChecked((prev) => prev.map((el, idx) => (idx === index ? event.target.checked : el)));
    };
  };

  const handleChangeParent = (event) => {
    setChecked((prev) => prev.map(() => event.target.checked));
  };

  const handleMet = () => {
    console.log(api.getFilterModel('guarantor'));
  };

  return (
    <Box sx={{ width: 200, p: 1 }}>
      <button onClick={handleMet}>Get model</button>
      <FormControl>
        <FormLabel id="guarantor-type-radio-buttons-group">Guarantor type</FormLabel>
        <RadioGroup
          aria-labelledby="guarantor-type-radio-buttons-group"
          value={type}
          name="guarantor-type"
          onChange={handleChange}>
          <Stack direction="row">
            <For of={typeValues} each="typeVal">
              <FormControlLabel key={typeVal} value={typeVal} control={<Radio />} label={typeVal.toUpperCase()} />
            </For>
          </Stack>
        </RadioGroup>
      </FormControl>
      <Stack>
        <FormControlLabel
          label="All"
          control={
            <Checkbox
              checked={checked.every((el) => el)}
              indeterminate={checked.some((el) => el)}
              onChange={handleChangeParent}
            />
          }
        />
        {checked.map((check, index) => (
          <FormControlLabel
            key={namesValue[index]}
            label={namesValue[index]}
            control={<Checkbox checked={check} onChange={handleChangeChild(index)} />}
          />
        ))}
      </Stack>
    </Box>
  );
});
