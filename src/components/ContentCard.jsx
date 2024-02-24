const ContentCard = () => {
  return (
    <div className="flex max-w-3xl gap-10">
      <figure className="max-w-xs ">
        <img
          src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
          className="w-full h-full object-cover"
          alt="Drones"
        />
      </figure>
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="card-title">Drones Title Example</h2>
          <h4 className="card-subtitle">Subtitle Subtitle description</h4>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quibusdam, quia, quae doloremque quidem quos repellendus
          autem dolorum voluptas
        </p>
        <div className="w-20">
          <button className="btn btn-wide bg-gray-400">See more</button>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
