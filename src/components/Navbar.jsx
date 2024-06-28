import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function Navbar() {
  const count = useSelector((state) => state.counter.value)
  const totalProductInCart = useSelector((state) => state.product.total)

  const path = [
    {
      id: 1,
      href: "",
      title: "HomePage"
    },
    {
      id: 2,
      href: "counter-page",
      title: "CounterPage"
    },
    {
      id: 3,
      href: "cart-page",
      title: `Isi cart: ${totalProductInCart}`
    }
  ]
  return (
    <nav className={"w-full bg-gray-400 p-3 flex justify-between"}>
      <p>{`This is count between components: ${count}`}</p>
      <ul className={"flex justify-center items-center gap-5"}>
        {path.map((item) => (
          <li className={"hover:underline"} key={item.id}>
            <Link to={item.href} >{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;