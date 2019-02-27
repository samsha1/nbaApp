import React from 'react'


const Logo = () => {
    return (
        <img src="/public/images/nba_logo.png"  alt="nba logo"/>
    )
}

const style = {
    header{
        backgroundColor:#ccc;
    }
}

const Header = () => {
  return (
    <div className="">
        <Logo/>
    </div>
  )
}

export default Header;
