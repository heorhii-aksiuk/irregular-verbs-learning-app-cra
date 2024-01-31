import logo from '../assets/images/logo.png';

export default function AppBar() {
  return (
    <header className="h-12 bg-gray-800/90 fixed top-0 w-full text-zinc-200 border-b border-gray-900 drop-shadow-md">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <div className="flex">
          <img className="mr-3 mt-1 h-10 w-10" src={logo}></img>
          <div>
            <p className="font-mono text-l font-semibold text-slate-300/85">
              Aytivets
            </p>
            <p className="font-mono text-slate-300/85">
              Irregular verbs learning app
            </p>
            {/* TODO: timer */}
          </div>
        </div>
        <p className="font-mono text-slate-300/85">v.0.3</p>
      </div>
    </header>
  );
}
