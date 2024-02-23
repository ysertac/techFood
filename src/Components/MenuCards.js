const MenuCards = ({ item }) => {
  return (
    <div className="bg-white flex flex-col items-center justify-around h-[450px] rounded-xl">
      <img src={item.img} className="w-2/3" />
      <h2 className="self-start w-5/6 mx-auto font-bold text-xl text-specDimGrey">
        {item.name}
      </h2>
      <div className="flex justify-between items-center w-5/6">
        <span className="text-lg font-bold text-specLightGrey">
          {item.point}
        </span>
        <span className="text-lg font-bold text-specLightGrey">
          {"(" + item.dailyOrder + ")"}
        </span>
        <span className="text-lg font-bold text-specDimGrey">
          {item.price}₺
        </span>
      </div>
    </div>
  );
};
export default MenuCards;
