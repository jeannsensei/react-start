import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './List.module.css'
//
import { doSomething, getTodos } from '../../services/ListService/ListService'

export default class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
        }
        // this._getTodos = this._getTodos.bind(this)
    }

    static propTypes = {
        prop: PropTypes,
    }

    componentDidMount() {
        /* Env Variables
         * https://medium.com/better-programming/using-environment-variables-in-reactjs-9ad9c5322408
         */

        console.log(process.env.REACT_APP_CLIENT_ID)
        this._getTodos()
    }

    render() {
        // https://medium.com/@eshwaren/enable-emmet-support-for-jsx-in-visual-studio-code-react-f1f5dfe8809c
        return (
            <div className={styles.List}>
                {/* CSS classes with react - https://programmingwithmosh.com/react/multiple-css-classes-react/ */}
                <div className={`${styles.List_box} bg-light`}>
                    <ul className="list-group my-3">
                        {this.state.data.map((answer, i) => {
                            console.log('Entered')
                            return <li key={answer.id}>{answer.title}</li>
                            // Return the element. Also pass key
                            //    return (<Answer key={answer} answer={answer} />)
                        })}
                    </ul>
                </div>
            </div>
        )
    }

    _getTodos() {
        getTodos().then((res) => {
            console.log(res)
            this.setState({
                data: res.data,
            })
            console.log(this.state.data)
        })
    }
}

List.propTypes = {}

List.defaultProps = {}
