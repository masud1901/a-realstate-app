import { useState } from "react";

export default function CreateListing() {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: false,
    regularPrice: 1,
    discountedPrice: 0,
  });

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountedPrice,
  } = formData;

  function onChange() {}

  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-light">Create a Listing</h1>
      <form>
        <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
        <div className="flex space-x-3">
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded-lg focus:shadow-lg active:shadow-lg hover:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "sell"
                ? "bg-white text-bg-slate-600"
                : "bg-slate-600 text-white"
            }`}
          >
            sell
          </button>

          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded-lg focus:shadow-lg active:shadow-lg hover:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "rent"
                ? "bg-white text-bg-slate-600"
                : "bg-slate-600 text-white"
            }`}
          >
            rent
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Property Name"
          maxLength="32"
          minLength="10"
          required
          className="w-full px-4 py-2 text-gray-700 text-xl bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-blue-20 focus:border-slate-600 mb-6"
        />

        <div>
          <div className="flex space-x-6">
            <div>
              <p className="text-lg font-semibold">Beds</p>
              <input
                type="number"
                id="bedrooms"
                value={bedrooms}
                onChange={onChange}
                min="1"
                max="50"
                required
                className="w-full px-4 py-2 text-center text-gray-700 text-xl bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-blue-20 focus:border-slate-600 mb-6"
              />
            </div>
            <div>
              <p className="text-lg font-semibold">Baths</p>
              <input
                type="number"
                id="bathrooms"
                value={bathrooms}
                onChange={onChange}
                min="1"
                max="50"
                required
                className=" w-full px-4 py-2 text-center text-gray-700 text-xl bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-blue-20 focus:border-slate-600 mb-6"
              />
            </div>
          </div>
        </div>
        <p className="text-lg font-semibold">Parking Spot</p>
        <div className="flex space-x-3">
          <button
            type="button"
            id="parking"
            value={parking}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded-lg focus:shadow-lg active:shadow-lg hover:shadow-lg transition duration-150 ease-in-out w-full ${
              parking ? "bg-white text-bg-slate-600" : "bg-slate-600 text-white"
            }`}
          >
            yes
          </button>

          <button
            type="button"
            id="parking"
            value={parking}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded-lg focus:shadow-lg active:shadow-lg hover:shadow-lg transition duration-150 ease-in-out w-full ${
              parking ? "bg-slate-600 text-white" : "bg-white text-bg-slate-600"
            }`}
          >
            no
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Furnished</p>
        <div className="flex space-x-3">
          <button
            type="button"
            id="furnished"
            value={furnished}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded-lg focus:shadow-lg active:shadow-lg hover:shadow-lg transition duration-150 ease-in-out w-full ${
              furnished
                ? "bg-white text-bg-slate-600"
                : "bg-slate-600 text-white"
            }`}
          >
            yes
          </button>

          <button
            type="button"
            id="furnished"
            value={furnished}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded-lg focus:shadow-lg active:shadow-lg hover:shadow-lg transition duration-150 ease-in-out w-full ${
              furnished
                ? "bg-slate-600 text-white"
                : "bg-white text-bg-slate-600"
            }`}
          >
            no
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Address</p>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={onChange}
          placeholder="Address"
          required
          className="w-full px-4 py-2 text-gray-700 text-xl bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-blue-20 focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Description</p>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={onChange}
          placeholder="Add description"
          required
          className="w-full px-4 py-2 text-gray-700 text-xl bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-blue-20 focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Offer</p>
        <div className="flex space-x-3">
          <button
            type="button"
            id="offer"
            value={offer}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded-lg focus:shadow-lg active:shadow-lg hover:shadow-lg transition duration-150 ease-in-out w-full ${
              offer ? "bg-white text-bg-slate-600" : "bg-slate-600 text-white"
            }`}
          >
            yes
          </button>

          <button
            type="button"
            id="offer"
            value={offer}
            onClick={onChange}
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded-lg focus:shadow-lg active:shadow-lg hover:shadow-lg transition duration-150 ease-in-out w-full ${
              offer ? "bg-slate-600 text-white" : "bg-white text-bg-slate-600"
            }`}
          >
            no
          </button>
        </div>

        <div className="mt-6">
          <div className="flex justify-start items-center space-x-6">
            <div>
              <p className="text-lg font-semibold">Regular Price</p>
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={onChange}
                min="1"
                required
                className="w-[200px] px-4 py-2 text-center text-gray-700 text-xl bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-blue-20 focus:border-slate-600 mb-6"
              />
            </div>
            {type === "rent" && (
              <p className="text-md w-full whitespace-nowrap">$/Month</p>
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-6">
            <div>
              <p className="text-lg font-semibold">Discounted Price</p>
              <input
                type="number"
                id="discountedPrice"
                value={discountedPrice}
                onChange={onChange}
                min="1"
                required
                className="w-[200px] px-4 py-2 text-center text-gray-700 text-xl bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-blue-20 focus:border-slate-600 mb-6"
              />
            </div>
            {offer && (
              <p className="text-md w-full whitespace-nowrap">$/Month</p>
            )}
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-600 text-sm">
            The first image will be the cover (max 6)
          </p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg,.png,.jpeg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-white border-gray-300 rounded-lg transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
          />
        </div>
        <button type="submit" className="my-4 w-full bg-blue-500 opacity-90 hover:bg-blue-600 hover:opacity-100 text-white font-semibold uppercase py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none active:bg-blue-700">Create Listing</button>
      </form>
    </main>
  );
}