import { PropsWithChildren } from "react"
import style from "./LayoutHeader.module.sass"

export const LayoutHeader = (props: PropsWithChildren) => {
    return (<div className={style.header}>{props.children}</div>)
}