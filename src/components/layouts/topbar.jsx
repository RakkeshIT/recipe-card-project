import Logo from '../../assets/images/logo.webp'
export const Topbar = () => {
  return (
    <div className="bg-white border-1 border-slate-200 shadow-lg py-2 px-10 h-16 flex items-center justify-between">
      <div>
        <h1>Dahsboard</h1>
      </div>

      <div className="flex items-center gap-10">
        <div>
          <input
            type="text"
            placeholder="Search Pages..."
            className="w-full pl-4 pr-4 py-2.5 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
          />
        </div>

        <div className='bg-white rounded-full p-1 shadow-md'>
          <img className='h-10 w-10' src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};
