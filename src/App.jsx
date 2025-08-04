import DataImage from "./data"

function App() {

  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
            <q>kode yang indah, lahir dari ketekunan.😍</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Insan Hakim</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nobis exercitationem? Deleniti, ratione pariatur sequi provident debitis quos ipsam temporibus fugit ad nostrum fugiat suscipit deserunt veniam laborum magni. Numquam?
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i className="ri-download-line ri-lg"></i></a>
            <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto" />
      </div>

      {/* Tentang */}
      <div className="tentang mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" />
          <p className="text-base/loose mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatem tenetur dolorum rerum temporibus eveniet ipsa at praesentium illum laudantium, repudiandae quis est, accusamus obcaecati porro mollitia nisi, accusantium dolor! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus maiores, dolores fugit esse provident nostrum, vero voluptates ut exercitationem ab excepturi culpa impedit fugiat itaque. Dolor eius quasi suscipit commodi!
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  45 <span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  4 <span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">Tools yang dipakai</h1>
          <p className="w-2/5 text-base/loose opacity-50">Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan website atauoun desain</p>
          <div className="tools-box">
            <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md
            hover:bg-zinc-800 group">
              <img src="" alt="Tools Image" className="w-14 bg-zinc-800 p-1
               group-hover:bg-zinc-900" />
              <div>
                <h4>Nama Tools</h4>
                <p>Desain App</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tentang */}
    </>
  )
}

export default App
