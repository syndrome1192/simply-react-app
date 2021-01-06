import React from "react";
import Layout from "./hoc/Layout";
import Main from "./hoc/Main";
import "./App.css"
import "./style.css"
import Block from './components/block'
import Loader from "./UI/Loader";
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchMessage, onChangeHandler} from './store/actions/messages'



class App extends React.Component {
    componentDidMount() {
        this.props.fetchMessage()
    }

    render(){
    return (
        <Switch>
            <Route path="/main">
                <Layout onChangeSearch={event => this.props.onChangeHandler(event.target.value)}>
                    <div className="container">
                        {   this.props.loader
                            ?
                            <Loader />
                            :
                            this.props.messages
                                .filter(d => {
                                    return this.props.filteredMsg === "" || d.title.toLowerCase().indexOf(this.props.filteredMsg.toLowerCase()) !== -1
                                })
                                .map(d => {
                                    return (
                                        <Block key={d.id} title={d.title} uid={d.id} body={d.body} userid={d.userId} objects={this.props.users} />
                                    )
                                })
                        }
                    </div>
                </Layout>
            </Route>
            <Route path="/" exact>
                <Main>
                    <div className="container">
                        <p className="box">Нажмите на получить данные</p>
                    </div>
                </Main>
            </Route>
        </Switch>
    )
  }
}
function mapStateToProps(state){
    return {
        filteredMsg: state.message.filteredMsg,
        messages: state.message.messages,
        users: state.message.users,
        loader: state.message.loader
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchMessage: () => dispatch(fetchMessage()),
        onChangeHandler: (e) => dispatch(onChangeHandler(e))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
