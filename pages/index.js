import Nav from '../components/nav'
import Footer from '../components/Footer'

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="py-2 sm:p-3">
        <h1 className="text-5xl text-left text-accent-1 pl-8 uppercase">
          Next.js + Tailwind CSS
        </h1>
      </div>


      <div className="p-3 md:grid grid-cols-3 gap-2 md:p-8">
        <div className="px-4 py-4 col-span-2 row-span-2 bg-black text-white">Lucy</div>
        <div className="px-4 py-8 bg-black text-white">In the Sky</div>
        <div className="px-4 py-8 bg-black text-white">With Diamonds</div>

      </div>

      <div className="p-3 grid sm:grid-cols-2 md:grid-cols-4 gap-2 md:p-8">
        <div className="px-4 py-4 bg-black text-white">Lucy</div>
        <div className="px-4 py-8 bg-black text-white">In the Sky</div>
        <div className="px-4 py-8 bg-black text-white">With Diamonds</div>
        <div className="px-4 py-8 bg-black text-white">With Diamonds</div>
        <div className="px-4 py-4 bg-black text-white">Lucy</div>
        <div className="px-4 py-8 bg-black text-white">In the Sky</div>
        <div className="px-4 py-8 bg-black text-white">With Diamonds</div>
        <div className="px-4 py-8 bg-black text-white">With Diamonds</div>
      </div>
      <Footer />
    </div>
  )
}
