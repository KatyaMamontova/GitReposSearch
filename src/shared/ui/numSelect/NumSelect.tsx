import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { NumSelectProps } from './types'

const NumSelect = (props: NumSelectProps) => {
    return (
        <FormControl>
            <InputLabel>Age</InputLabel>
            <Select
                value={props.currentValue}
                onChange={props.handleChange}
            >
                {props.menuItems.map(item => <MenuItem value={item}>item</MenuItem>)}
            </Select>
        </FormControl>
    )
}

export { NumSelect }