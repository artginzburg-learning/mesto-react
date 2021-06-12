import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';

import api from '../utils/api';
import { cardSelectors } from '../utils/utils';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: 'Неизвестный',
      userDescription: 'Потеряно соединение с сервером',
      userAvatar: '',
      cards: [],
    };
  }

  componentDidMount() {
    api.getUserInfo()
      .then(res =>
        this.setState({
          userName: res.name,
          userDescription: res.about,
          userAvatar: res.avatar,
        })
      );

    api.getInitialCards()
      .then(res => {
        this.setState({
          cards: res
        });

        this.state.cards.forEach(card => {
          const cardElement =
            <Card card={card} />
          ;

          const cardPlaceholder = document.createElement('li');
          cardPlaceholder.className = 'element';

          document.querySelector(cardSelectors.listSelector).append(cardPlaceholder);

          ReactDOM.render(
            cardElement,
            cardPlaceholder
          );
        });
      });
  }

  render() {
    return (
      <main className="content">

        <section className="profile">
          <button onClick={this.props.onEditAvatar} type="button" className="profile__avatar-container">
            <img alt="Аватар" className="profile__avatar" src={this.state.userAvatar} />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{this.state.userName}</h1>
            <p className="profile__description">{this.state.userDescription}</p>
            <button onClick={this.props.onEditProfile} type="button" className="profile__edit-button" />
          </div>
          <button onClick={this.props.onAddPlace} type="button" className="profile__add-button" />
        </section>

        <section className="elements">
          <ul className="elements__list" />
        </section>

      </main>
    );
  }
}

export default Main;