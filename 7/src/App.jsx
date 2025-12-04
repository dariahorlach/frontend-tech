import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import "./App.css";
import GoodsList from "./components/GoodsList";

function App() {
  return (
    <div className="container">
      <Header text="Горлач Дар‘я Дмитрівна" />

      <Content />

      <Image />

      <div className="container">
        <h1>Галерея товарів</h1>
        <GoodsList />
      </div>
    </div>
  );
}

export default App;
