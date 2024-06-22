import Card from "./Card";

const Cards = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex gap-2 py-20 mx-auto">
        <Card width="w-1/2" start={false} para={true} />
        <Card width="w-2/3" start={true} para={false} hover="true" />
      </div>
    </div>
  );
};

export default Cards;
