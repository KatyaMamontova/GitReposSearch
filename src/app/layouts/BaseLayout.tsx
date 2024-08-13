import { Layout } from '../../shared/ui/layout/Layout'
import { LayoutHeader } from '../../widgets/layoutHeader/ui/LayoutHeader'
import { PropsWithChildren } from 'react'
import { SearchWidget } from '../../widgets/searchWidget/ui/SearchWidget'

export const BaseLayout = (props: PropsWithChildren
) => {
    return (
        <Layout
            headerSlot={
                <LayoutHeader>
                    <SearchWidget/>
                </LayoutHeader>
            }
        >{props.children}
        </Layout>
    )
}