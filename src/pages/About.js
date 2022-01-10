import React from "react"

export const About = () => {
    return (
        <div className="jumbotron">
        <h1 className="display-4">Информация</h1>
        <p className="lead">Это SPA приложение сделано на React</p>
        <hr className="my-4"/>
        <p>Использовались хуки useState, useEffect, useContext, useReducer и прочие</p>
        <a className="btn btn-primary btn-lg" href="https://github.com/AdekWHATT" role="button">Моя страница GitHub</a>
      </div>
    )
}