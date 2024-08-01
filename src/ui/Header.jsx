import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="border-b bg-yellow-400 px-4 py-3 uppercase border-stone-200 sm:px-6 flex items-center justify-between ">
      <Link to="/" className="tracking-widest">
        Fast react pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
