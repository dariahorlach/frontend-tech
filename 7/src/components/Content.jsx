import { Component } from "react";

class Content extends Component {
  constructor() {
    super();

    this.state = {
      highlighted1: false,
      highlighted2: false,
    };
  }

  toggle = (field) => {
    this.setState({ [field]: !this.state[field] });
  };

  render() {
    const styleOn = { background: "yellow", color: "red" };

    return (
      <div>
        <p
          style={this.state.highlighted1 ? styleOn : {}}
          onClick={() => this.toggle("highlighted1")}
        >
          <b>Дата та місце народження:</b> 09.04.2006, місто Мелітополь.
        </p>

        <p
          style={this.state.highlighted2 ? styleOn : {}}
          onClick={() => this.toggle("highlighted2")}
        >
          <b>Освіта:</b> Київський ліцей 227
        </p>

        <h3>Моє хобі:</h3>
        <ul>
          <li>Малювання</li>
          <li>Подорожі</li>
          <li>Фотографія та обробка фото</li>
        </ul>

        <h3>Мої улюблені книги та фільми:</h3>
        <ol>
          <li>«Зоряні Війни»</li>
          <li>«Трансформери»</li>
          <li>Людина Павук</li>
        </ol>

        <h3>Найулюбленіше місто — Барселона</h3>
        <p>
          Барселона - найулюбленіше місто із всіх, що я була, в ньому є безліч
          локацій...
        </p>
      </div>
    );
  }
}

export default Content;
