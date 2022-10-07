export default function Home() {
  return (
    <div className="w-full h-[85vh] flex justify-center items-center">
      <div>
        <small className="text-orange-500 font-medium -mb-2 block">
          70% Off
        </small>
        <h1 className="text-3xl font-bold">New Collection For Fall</h1>
        <p className="text-gray-700 mb-1 text-[17px]">
          Discover all the new arrivals of ready-to-wear collection.
        </p>
        <button className="text-center bg-red-500 hover:bg-red-600 py-1 px-2  rounded bottom-0 text-white transition-all duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
}
