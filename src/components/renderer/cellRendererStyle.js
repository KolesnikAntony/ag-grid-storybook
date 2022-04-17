// import { useTheme } from '@mui/material/styles';

const useStyle = () => {
  // const theme = useTheme();

  return {
    cell: {
      display: 'flex',
      alignItems: 'center',
    },
    value: {
      // color: '#91a8c2',
    },

    iconClientWrapper: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      fontWeight: 600,
      color: '#00385d',
    },

    chipGuarantor: {
      height: '2rem',
      borderRadius: '.5rem',
      fontSize: '1rem',
      fontWeight: 600,
      color: '#424242',
      '.MuiChip-label': {
        paddingRight: '.5rem',
        paddingLeft: '.5rem',
      },
      '&:first-child': {
        marginRight: '.8rem',
      },
    },

    chipStatus: {
      height: '2rem',
      borderRadius: '.5rem',
      fontSize: '1rem',
      fontWeight: 600,
      color: '#424242',
      '.MuiChip-label': {
        paddingRight: '.5rem',
        paddingLeft: '.5rem',
      },
      '.MuiChip-icon': {
        marginRight: '.3rem',
      },
    },
  };
};

export default useStyle;
