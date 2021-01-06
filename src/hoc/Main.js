import React, {Component} from 'react'
import {NavLink} from "react-router-dom";
import './Layout.css'


class Main extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <nav className="navbar navbar-primary bg-success">
                        <span className="navbar-brand mb-0 h1">Получение данных из API</span>
                        <NavLink className="links" to="/main">Получить данные</NavLink>
                    </nav>
                </div>

                <main>
                    {this.props.children }
                </main>
            </div>
        )
    }
}

export default Main