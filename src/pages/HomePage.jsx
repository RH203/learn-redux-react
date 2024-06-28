import {useDispatch, useSelector} from "react-redux";
import {addProductToCart} from "../redux/slice/productSlice.js";



function HomePage() {
  const tableItems = [
    {
      name: "Smartphone XYZ",
      description: "Powerful smartphone with advanced features",
      price: "$1000",
      category: "Electronics"
    },
    {
      name: "Smartwatch ABC",
      description: "Sleek smartwatch with health monitoring features",
      price: "$300",
      category: "Wearable"
    },
    {
      name: "Laptop ZXY",
      description: "High-performance laptop for professionals",
      price: "$1500",
      category: "Electronics"
    },
    {
      name: "Camera DFG",
      description: "Professional-grade camera for photographers",
      price: "$2000",
      category: "Electronics"
    },
    {
      name: "Headphones XYZ",
      description: "Wireless headphones with noise cancellation",
      price: "$250",
      category: "Electronics"
    },
  ];
  const dispatch = useDispatch();

  const addProduct = (name, description, price, category) => {
    const temp = {
      name: name,
      description: description,
      price: price,
      category: category
    }
    dispatch(addProductToCart(temp));
    console.log("Helper function running")
  }


  const count = useSelector((state) => state.counter.value)
  return (
    <div className="w-full my-36 bg-gray-300 rounded-lg pb-20">
      <div className="w-full h-full">
        <div className="space-y-5">
          <h1 className="text-center pt-10 font-bold ">Home page</h1>
          <p className="text-center font-semibold">{`Counter: ${count}`}</p>
        </div>


        <div className="my-10 mx-3">
          <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Description</th>
                <th className="py-3 px-6">Price</th>
                <th className="py-3 px-6">Category</th>
                <th className="py-3 px-6"></th>

              </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
              {tableItems.map((item, idx) => (<tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
                <td className="text-right px-6 whitespace-nowrap">
                  <button onClick={() => addProduct(item.name, item.description, item.price, item.category)}
                          className="py-2 leading-none px-3 font-medium text-blue-600 hover:text-blue-500 duration-150 hover:bg-gray-50 rounded-lg">
                    Add
                  </button>
                </td>
              </tr>))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>);
}

export default HomePage;