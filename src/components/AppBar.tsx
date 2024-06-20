import logo from '../assets/images/logo.png';

interface Props {
  timer: string | null;
}

export default function AppBar({ timer }: Props) {
  const formatTime = (timer: string | null) => {
    if (timer === null) {
      return '00:00:00';
    }
    return timer.slice(0, -3);
  };

  return (
    <header className="h-12 bg-gray-800/90 fixed top-0 w-full text-zinc-200 border-b border-gray-900 drop-shadow-md">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <div className="flex">
          <img className="mr-3 mt-1 h-10 w-10" src={logo}></img>
          <div>
            <p className="font-poppins text-3xl text-slate-300/85 leading-7">
              Aytivets
            </p>
            <p className="font-mono text-sm text-slate-300/85 leading-none">
              Irregular verbs learning app
            </p>
            {/* TODO: timer */}
          </div>
        </div>
        <p>{formatTime(timer)}</p>
        <p className="font-mono text-slate-300/85">v.0.3</p>
      </div>
    </header>
  );
}
