import GoodsCard from "./GoodsCard";
import phone1 from "../assets/phone1.jpg";
import phone2 from "../assets/phone2.jpg";
import laptop1 from "../assets/laptop1.jpg";
import laptop2 from "../assets/laptop2.jpg";
import headphones from "../assets/headphones.jpg";
import watch from "../assets/watch.jpg";

function GoodsList() {
  const goods = [
    {
      image: phone1,
      title: "Смартфон Samsung S21",
      price: 18999,
    },
    {
      image: phone2,
      title: "iPhone 13",
      price: 27999,
    },
    {
      image: laptop1,
      title: "Ноутбук Lenovo IdeaPad",
      price: 19999,
    },
    {
      image: laptop2,
      title: "MacBook Air M1",
      price: 32999,
    },
    {
      image: headphones,
      title: "Навушники Sony WH-1000XM4",
      price: 10999,
    },
    {
      image: watch,
      title: "Смарт-годинник Apple Watch",
      price: 12999,
    },
  ];

  return (
    <div className="gallery">
      {goods.map((item, index) => (
        <GoodsCard
          key={index}
          image={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default GoodsList;
