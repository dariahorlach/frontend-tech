import { useState } from "react";
import barcelona from "../assets/barcelona.jpg";

function Image() {
  const [imgWidth, setImgWidth] = useState(450);
  const [exists, setExists] = useState(false);

  const addImg = () => setExists(true);
  const removeImg = () => setExists(false);

  return (
    <div>
      <a
        href="https://www.barcelonaturisme.com"
        target="_blank"
        style={{ display: "inline-block" }}
      >
        <div className="img-wrapper">
          {exists && (
            <img
              id="cityImg"
              src={barcelona}
              alt="Barcelona"
              style={{ width: imgWidth }}
            />
          )}
        </div>
      </a>

      <div className="buttons">
        <button onClick={addImg}>Додати зображення</button>
        <button onClick={() => exists && setImgWidth(imgWidth + 50)}>
          Збільшити
        </button>
        <button onClick={() => exists && setImgWidth(imgWidth - 50)}>
          Зменшити
        </button>
        <button onClick={removeImg}>Видалити</button>
      </div>
    </div>
  );
}

export default Image;
