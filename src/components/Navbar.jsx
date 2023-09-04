export default function Navbar() {
  return (
    <>
      <div className="navbar bg-secondary">
        <div className="navbar-start flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            Girlgroup Database
          </a>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal">
            <li>
              <a href="/" className="text-lg">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-lg">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
