import React from 'react';

import Card from './Card';

import api from '../utils/api';

import CurrentUserContext from '../contexts/CurrentUserContext';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    api.getInitialCards()
      .then(res => 
        this.setState({
          cards: res
        })
      );
  }

  static contextType = CurrentUserContext;

  render() {
    return (
      <main className="content">

        <section className="profile">
          <button onClick={this.props.onEditAvatar} type="button" className="profile__avatar-container">
            <img alt="Аватар" className="profile__avatar" src={this.context.avatar} />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{this.context.name}</h1>
            <p className="profile__description">{this.context.about}</p>
            <button onClick={this.props.onEditProfile} type="button" className="profile__edit-button" />
          </div>
          <button onClick={this.props.onAddPlace} type="button" className="profile__add-button" />
        </section>

        <section className="elements">
          <ul className="elements__list">
            {this.state.cards.map(card =>
              <Card key={card._id} onCardClick={this.props.onCardClick} card={card} />
            )}
          </ul>
        </section>

      </main>
    );
  }
}

export default Main;