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
      '&:first-of-type': {
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
    // cellButtonText: {
    //   minWidth: 0,
    //   padding: 0,
    // },
    cellButtonIcon: {
      width: '1.5rem',
      height: '1.5rem',
      color: '#bcbccb',
    },
    cellIconButton: {
      padding: 0,
      '.MuiSvgIcon-root': {
        color: '#9c9c9c',
      },
      '&:hover': {
        '.MuiSvgIcon-root': {
          color: '#2399f1',
        },
      },
    },
  };
};

export default useStyle;
