import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?semt=ais_hybrid&w=740" // replace with your food image path
          alt="Delicious food"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="brightness-75"
        />
      </div>
  
      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center bg-black/50">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Welcome to My Recipe App
        </h1>
  
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/recipes/server"
            className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
          >
            Server Page
          </a>
          <a
            href="/recipes/useeffect"
            className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
          >
            useEffect Page
          </a>
          <a
            href="/recipes/swr"
            className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
          >
            SWR Page
          </a>
        </div>
      </div>
    </div>
  );
  
}
