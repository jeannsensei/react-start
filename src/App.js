import logo from './logo.svg'
import './App.css'
import Header from './components/Header/Header'
import Router from './components/Router/Router'

/**
 * React CLI
 *
 * Generate Component - npx generate-react-cli component Name
 *
 * Article: https://dev.to/arminbro/generate-react-cli-1ooh
 * https://www.npmjs.com/package/generate-react-cli
 * https://github.com/arminbro/generate-react-cli - If fails, reinstall node_modules with npm install or update npm / node
 */

function App() {
    return (
        <div className="App">
            <Router />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
