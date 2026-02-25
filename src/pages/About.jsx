import HeroAbout from "../assets/images/About/Hero-about.png";
import StopGuessing from "../assets/images/About/stop-guessing.png";
import WeBelieve from "../assets/images/About/we-belive.png";
import Network3D from "../components/Network3D"
export default function About() {
  return (
    <main className="bg-[#f6f7f4] text-[#0f172a]">
      
      {/* Hero Section */}
      <section className="container-p py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          About KactusLabs
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          An intelligence platform for brands, built to turn market signals
          into clear, reliable decisions.
        </p>

        <div className="mt-12 flex justify-center">
          <img
            src={HeroAbout}
            alt="KactusLabs intelligence visualization"
            className="rounded-2xl shadow-lg max-w-4xl w-full"
          />
        </div>
      </section>

      {/* What We're Building */}
      <section className="container-p py-20 text-center">
        <h2 className="text-3xl font-semibold mb-12">
          What We’re Building
        </h2>

        <div className="flex justify-center gap-6 mb-10">
          <div className="w-40 h-56 bg-[#0b3b2e] rounded-2xl"></div>
          <div className="w-40 h-56 bg-[#c8d6b8] rounded-2xl"></div>
          <div className="w-40 h-56 bg-[#dfe7d5] rounded-2xl"></div>
        </div>

        <h3 className="text-xl font-medium mb-4">
          Today · Next · Forward
        </h3>
        <p className="text-slate-600 max-w-2xl mx-auto">
          KactusLabs brings fragmented market signals into one clear
          intelligence layer, helping brands understand what the market is
          doing now, how it’s evolving, and where demand is forming.
        </p>
      </section>

      {/* Section 1 */}
      <section className="container-p py-20 grid md:grid-cols-2 gap-16 items-center">
        <img
          src={StopGuessing}
          alt="Business professionals discussion"
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-semibold mb-6">
            Stop guessing. <br /> Start understanding.
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Sales numbers, customer feedback, trends, and competitor activity
            all exist in different places. KactusLabs unifies those signals into
            one intelligence view so teams can move with confidence instead of
            assumptions.
          </p>
        </div>
      </section>
<Network3D />
      {/* Section 2 */}
      <section className="container-p py-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6">
            We believe intelligence should be clear, not chaotic.
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Good tools reduce noise. Our platform surfaces the insights that
            matter most, helping leaders focus on what drives growth — without
            dashboard overload.
          </p>
        </div>

        <img
          src={WeBelieve}
          alt="Team strategic meeting"
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Investors Section */}
      <section className="py-20 bg-gradient-to-r from-[#0b3b2e] to-[#122c22] text-white text-center">
        <div className="container-p">
          <h2 className="text-3xl font-semibold mb-4">
            Backed by Industry-Leading Investors
          </h2>
          <p className="text-slate-300 mb-10">
            Backed by investors that care about execution just as much as we do.
          </p>

          <div className="flex flex-wrap justify-center gap-10 text-slate-300">
            <span>Tidal</span>
            <span>KeyPay</span>
            <span>ReceiptBank</span>
            <span>Ignition</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-p py-20">
        <div className="bg-gradient-to-r from-[#0b3b2e] to-[#122c22] text-white rounded-3xl p-12 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Start elevating product experiences with KactusLabs today
            </h2>
            <button className="mt-4 px-6 py-3 bg-white text-[#0b3b2e] rounded-full font-medium hover:opacity-90 transition">
              Schedule a Demo
            </button>
          </div>

          <div className="max-w-md text-slate-300 text-sm">
            <p>
              “We’ve been confident with product insights like never before.
              Everything works seamlessly, providing context and true clarity.”
            </p>
            <p className="mt-4 font-medium text-white">
              — Camila Ashe, E-commerce Leader
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}