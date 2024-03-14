function Header() {
  return (
    <>
      <div className="flex items-center space-x-5 flex-col lg:flex-row">
        <img src="../logo.jpg" className="w-40 ml-5" alt="" />
        <h1 className="font-black text-5xl text-center sm:mb-5 md:w-2/3 mx-auto">
          Seguimiento Pacientes {""}
          <span className="text-pink-700">Clínica</span>
        </h1>
      </div>
    </>
  );
}

export default Header;
