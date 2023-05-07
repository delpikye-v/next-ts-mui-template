import { useMediaQuery } from '@mui/material';

export const isMobileMedia = () => {
    return useMediaQuery('(max-width:767px)');
};
