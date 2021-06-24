import React from 'react'; 
import useStyles from './useStyles'; 

const Header = (props) =>{
  return(
    <header className={useStyles().header}>
      <h1>{props.title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Welcome to Task Manager",
  subTitle: "This is a Task Manager web application made using ReactJS"
}

export default Header 