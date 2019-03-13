import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import './sass/style.scss';
import Header from './Components/base/Header';
import Footer from './Components/base/Footer';
import Post from './Components/post/Post';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Post
          img="https://scontent.fsdu9-1.fna.fbcdn.net/v/t1.0-9/34984745_1853540531364261_175395636756086784_n.jpg?_nc_cat=101&_nc_ht=scontent.fsdu9-1.fna&oh=025636d2fe37f64a55baf67b33a7ac3c&oe=5D0A47EB"
          text="lua de mel"
          name="Felipe Oliveira"
          time="há 3 minutos"
        />

        <Post
          img="https://thumbs.dreamstime.com/t/beleza-woman-modelo-com-cabelo-ondulado-longo-de-brown-cabelo-saud%C3%A1vel-e-composi%C3%A7%C3%A3o-profissional-bonita-bordos-vermelhos-e-68285358.jpg"
          text="Doideras de Natal"
          name="Maria Clara"
          time="há 4 minutos"
        />

        <Post
          img="https://images.unsplash.com/photo-1470072508653-1be229b63562?ixlib=rb-1.2.1&w=1000&q=80"
          text="Doideras de Reveion"
          name="Clara Carvalho"
          time="há 5 minutos"
        />

        <Footer />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
