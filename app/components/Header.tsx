export default function Header() {
  return (
    <header className=" text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">ACKERN</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#regeln" className="hover:underline">
                Regeln
              </a>
            </li>
            <li>
              <a href="#anfahrt" className="hover:underline">
                Anfahrt
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Timetable
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
