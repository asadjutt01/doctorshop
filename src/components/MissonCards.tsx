import Image from "next/image";

const MissonCards = ({ cards }: any) => {
  return (
    <div className="cardContainer">
      {cards.map((card:any, index:number) => (
        <div key={index} className="card">
          <div className="img">
            <Image src={card.icon} alt={card.name} width={70} height={70} />
          </div>
          <h3 className="title">{card.title}</h3>
          <p className="description">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MissonCards;
