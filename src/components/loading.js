import React, { Fragment } from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';

const useStyle = () => {
  const theme = useTheme();

  return {
    skeletonBox: {
      position: 'absolute',
      top: '4.8rem',
      right: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      padding: '.8rem 1.6rem',
      '& > *:not(:last-child)': {
        marginBottom: '.8rem',
      },
    },
    skeleton: {
      flexShrink: 0,
      height: '2.5rem',
      borderRadius: '.8rem',
      transform: 'none',
    },
    divider: {
      marginRight: '-1.6rem',
      marginLeft: '-1.6rem',
    },
  };
};

const Loading = () => {
  const sx = useStyle();
  const sk = () => {
    let arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push(
        <Fragment key={i}>
          <Skeleton sx={sx.skeleton} variant="text" /> <Divider sx={sx.divider} />
        </Fragment>
      );
    }
    return arr;
  };

  return <Box sx={sx.skeletonBox}>{sk()}</Box>;
};

export default Loading;
