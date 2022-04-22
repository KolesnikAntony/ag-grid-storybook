// import { useTheme } from '@mui/material/styles';

const useStyle = () => {
  // const theme = useTheme();

  return {
    page: {
      display: 'flex',
      flexDirection: 'column',
      padding: '2.5rem',
      height: '100vh',
      backgroundImage: 'linear-gradient(0deg,#e3e3e3,#f8f8f8)',
      overflow: 'auto',
    },
    pageTabs: {
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: '2.5rem',
    },
  };
};

export default useStyle;
