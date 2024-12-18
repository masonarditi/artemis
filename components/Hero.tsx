import IphoneRender from './IphoneRender'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2">
          <IphoneRender />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">big black balls</h1>
          <p className="text-xl md:text-2xl mb-8">Discover the new collection</p>
          <button className="bg-white text-black px-8 py-3 text-lg font-semibold hover:bg-gray-200 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  )
}

