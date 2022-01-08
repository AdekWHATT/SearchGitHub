import React, { useContext, useState } from "react"
import { AlertContext } from "../context/Alert/alertContext"
import { GitHubContext } from '../context/GitHub/GitHubContext'
export const Search = () => {

    const [value, setValue] = useState('')

    const alert = useContext(AlertContext)

    const github = useContext(GitHubContext)
    const onSubmit = event => {
        if (event.key !== "Enter") {
            return
        }
        // очищает предудущий список если поле было пусто
        github.clearUsers()
        //

        if (value.trim()) {
            alert.hide()
            github.search(value.trim())

        } else {

            alert.show('Поле не может быть пустым!!!')

        }
    }
    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Введите Ник пользователя"
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    )

}