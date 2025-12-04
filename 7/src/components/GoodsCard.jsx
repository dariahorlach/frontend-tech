function GoodsCard({ image, title, price }) {
  return (
    <div className="card">
      <img src={image} alt={title} />

      <h3>{title}</h3>
      <p className="price">{price} грн</p>
    </div>
  );
}

export default GoodsCard;
