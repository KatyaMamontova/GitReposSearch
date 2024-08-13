import { PropsWithChildren } from "react"
import { Button, ButtonProps } from "@mui/material"
import style from "./StyledButton.module.sass"

type Props = {
    color: "blue" | "white"
}

export const StyledButton = (props: PropsWithChildren<Props>) => {
    return (
        <Button
            variant="contained"
            className={style[`button_${props.color}`]}
        >{props.children}
        </Button>
    )
}