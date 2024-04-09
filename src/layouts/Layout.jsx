import styles from "./Layout.module.css"

import PropTypes from "prop-types"
function Layout({ children }) {
  return (
    <>
        <header className={styles.header}>
            <h1>BookApp</h1>
            <p>
                <a href="https://github.com/golabisib">GolabiSib</a> | ReactJS Project
            </p>
        </header>
        {children}
        <footer className={styles.footer}><p>By RoozbehRigiJangjo </p></footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout
