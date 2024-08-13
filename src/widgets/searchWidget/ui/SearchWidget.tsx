import { StyledButton } from "../../../shared/ui/button/StyledButton"
import { SearchInput } from "../../../shared/ui/searchInput/SearchInput"
import style from "./SearchWidget.module.sass"

export const SearchWidget = () => {
    return (
        <div className={style.widget}>
            <SearchInput />
            <StyledButton color="blue">Найти</StyledButton>
        </div>
    )
}