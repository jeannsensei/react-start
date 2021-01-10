import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.module.css'

/**
 * React Bootstrap - npm install react-bootstrap bootstrap
 * https://codeburst.io/9-amazing-react-libraries-that-will-simplify-a-developers-life-3274698b60d2
 */

const Header = () => (
    <div>
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossOrigin="anonymous"
        />
    </div>
)

Header.propTypes = {}

Header.defaultProps = {}

export default Header
