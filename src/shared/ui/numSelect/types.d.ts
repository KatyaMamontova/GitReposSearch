import { SelectProps } from '@mui/material';

export type NumSelectProps = {
    currentValue: number;
    menuItems: number[];
    handleChange: () => {};
} & SelectProps