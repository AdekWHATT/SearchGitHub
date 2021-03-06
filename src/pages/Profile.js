import React, { useContext, useEffect, Fragment } from "react"
import { Link, useMatch } from "react-router-dom"
import { Repos } from "../components/Repos"
import { GitHubContext } from '../context/GitHub/GitHubContext'

export const Profile = () => {
    const match = useMatch("/profile/:name")
    // console.log(match)

    const { getUser, getRepos, loading, user, repos } = useContext(GitHubContext)

    const {
        name, company, avatar_url,
        location, bio, blog,
        login, html_url, followers,
        following,
        public_repos, public_gists
    } = user
    const urlName = match.params.name
    useEffect(() => {

        getUser(urlName)
        getRepos(urlName)
        //eslint-disable-next-line
    }, [urlName])

    if (loading) {
        return <p className="text-center">Загрузка.....</p>
    }




    return (
        <Fragment>
            <Link to='/' className="btn btn-link">Вернуться на главную</Link>
            <div className="card mb-4">
                <div className="cars-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img
                                src={avatar_url}
                                alt={name}
                                style={{
                                    width: '150px'
                                }} />
                            <h1>{name}</h1>
                            {location && <p>Местоположение: {location}</p>}
                        </div>
                        <div className="col">
                            {
                                bio && <Fragment>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </Fragment>
                            }
                            <a
                                href={html_url}
                                rel="noopener noreferrer"
                                target='_blank'
                                className="btn btn-dark">
                                Открыть профиль
                            </a>
                            <ul>
                                {login && <li>
                                    <strong>Username:</strong> {login}
                                </li>}

                                {company && <li>
                                    <strong>Компания:</strong> {company}
                                </li>}

                                {blog && <li>
                                    <strong>Website:</strong> {blog}
                                </li>}
                            </ul>


                            <div className="badge badge-primary">Подписчики: {followers}</div>
                            <div className="badge badge-sucess">Подписан: {following}</div>
                            <div className="badge badge-info">Репозитории: {public_repos}</div>
                            <div className="badge badge-dark">Gists: {public_gists}</div>




                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos} />
        </Fragment>
    )
}