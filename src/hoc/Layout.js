import React, {Component} from 'react'
import './Layout.css'
import {NavLink} from 'react-router-dom'


class Layout extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <nav className="navbar navbar-primary bg-primary">
                        <span className="navbar-brand mb-0 h1">Получение данных из API</span>
                        <NavLink to="/"  className="links" exact={true}>На главную</NavLink>
                        <form className="form-inline my-2 my-lg-0">
                            <input onChange={this.props.onChangeSearch} className="form-control mr-sm-2" type="search" placeholder="Поиск по Заголовку"
                                   aria-label="Search"/>


                        </form>
                    </nav>
                </div>
                <main>
                    {this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout