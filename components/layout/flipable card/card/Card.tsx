function Card({ onClick }) {
  return (
    <div
      className="relative w-full h-full border-4 border-black rounded shadow card"
      onClick={onClick}
    >
      <div className="absolute flex items-center justify-center w-full h-full card-front"></div>
      <div className="absolute flex items-center justify-center w-full h-full card-back"></div>
    </div>
  );
}

export default Card;
