import React, { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

export const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      {/* -가 들어간 css 파일명이므로, 아래와 같이 해야함 .은 사용x */}
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='meals jpg' />
      </div>
    </Fragment>
  );
};
