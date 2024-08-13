import style from './Layout.module.sass'
import type { PropsWithChildren, ReactNode } from 'react'

type Props = {
    headerSlot: ReactNode
}

export function Layout(props: PropsWithChildren<Props>) {
    return (
        <div className={style.root}>
            {props.headerSlot}
            <div className={style.content}>
                {props.children}
            </div>
            <footer className={style.footer}>
            </footer>
        </div>
    )
}

