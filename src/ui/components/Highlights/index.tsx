import Card from "./Card";
import citiesData from "@/lib/place-holderData.json";

const Highlights = () => {
  const cities = citiesData;

  return (
    <section className="highlights-container">
      <h2>HIGHLIGHTS</h2>
      <div>
        {cities.map((item) => (
          <Card
            key={item.city}
            title={item.city}
            country={item.country}
            imageUrl={item.photos[0]}
          />
        ))}
      </div>
    </section>
  );
};

export default Highlights;
