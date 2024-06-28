import {useSelector} from "react-redux";

function CartPage() {
  const data = useSelector((state) => state.product.value)
  return (
    <div className={"my-36 bg-gray-300 pb-20 rounded-lg"}>
      <div className="space-y-5">
        <h1 className="text-center pt-10 font-bold ">Cart</h1>
      </div>

      <div className=" mx-3">
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
            {data.map((item, idx) => (<tr key={idx}>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.description}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
            </tr>))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CartPage;