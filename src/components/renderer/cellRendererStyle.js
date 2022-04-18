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
        marginRight: '.1rem',
      },
    },

    cellButton: {
      minWidth: '2.4rem',
      width: '2.4rem',
      height: '2.4rem',
      padding: 0,
      borderRadius: '.5rem',
      backgroundColor: 'white',
      boxShadow: '0 0.4rem 0.8rem 0 hsl(0deg 0% 61% / 15%)',
      '&:hover': {
        backgroundColor: '#424242',
        boxShadow: 'none',
        '.MuiSvgIcon-root': {
          color: 'white',
        },
      },
    },
    cellButtonIcon: {
      width: '1.5rem',
      height: '1.5rem',
      color: '#bcbccb',
    },
  };
};

export default useStyle;
