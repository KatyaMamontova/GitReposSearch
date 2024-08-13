import { TextField, InputProps } from '@mui/material'
import style from "./SearchInput.module.sass"

const SearchInput = (props: InputProps) => {
    return (
        <TextField
            // id="outlined-size-small"
            size="small"
            variant="filled"
            className={style.input} />
    )
}

export { SearchInput }