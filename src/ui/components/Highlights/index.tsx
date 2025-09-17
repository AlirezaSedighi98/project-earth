import Card from "./Card";
import citiesData from "@/lib/place-holderData.json";

const Highlights = () => {
  const cities = citiesData;
  console.log(cities.map((item) => item.photos));

  return (
    <section className="highlights-container p-2rem grid grid-cols-1 gap-2rem">
      <h2 className="text-large font-bold text-solid-white">HIGHLIGHTS</h2>
      {cities.map((item) => (
        <Card
          key={item.city}
          title={item.city}
          country={item.country}
          imageUrl={item.photos[0]}
        />
      ))}
    </section>
  );
};

export default Highlights;
