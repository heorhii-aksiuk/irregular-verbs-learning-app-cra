import logo from '../assets/images/logo.png';

export default function AppBar() {
  return (
    <header className="h-12 bg-gray-800/90 fixed top-0 w-full text-zinc-200 border-b border-gray-900 drop-shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex">
          <img className="mr-2 h-11 w-11" src={logo}></img>
          <div>
            <p className="font-semibold">Aytivets</p>
            <p>Irregular verbs learning app</p>
          </div>
        </div>
        <p>v.0.3</p>
      </div>
    </header>
  );
}
