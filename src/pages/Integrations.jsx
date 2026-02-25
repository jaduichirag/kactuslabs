import { Link } from "react-router-dom";
import HeroIntegration from "../assets/images/Integration/Hero-Integration.png";
import KactusLabsAPI from "../assets/images/Integration/kactuslabsapi.png";
import ShopifyLogo from "../assets/images/Integration/shopify.png";
import WooCommerceLogo from "../assets/images/Integration/woocommerce.png";

export default function Integrations() {
  return (
    <main className="bg-[#f6f7f4] text-[#0f172a]">

      {/* Hero Section */}
      <section className="bg-[#e9efe4] py-24">
        <div className="container-p text-center">

          <h1 className="text-4xl md:text-5xl font-semibold mb-6 max-w-3xl mx-auto leading-tight">
            Integrate KactusLabs with <br /> Your Commerce Stack
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto mb-10">
            Connect KactusLabs with Shopify, WooCommerce, and custom platforms
            to unify data workflows and automate intelligent product operations.
          </p>

          <button className="px-6 py-3 bg-[#0b3b2e] text-white rounded-full font-medium hover:opacity-90 transition">
            Explore Integrations
          </button>

          {/* Visual Connection */}
          <div className="mt-20 flex items-center justify-center gap-12 md:gap-20">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center text-2xl font-bold text-green-600">
                <img src={ShopifyLogo} />
              </div>
              <span className="mt-3 text-sm text-slate-600">Shopify</span>
            </div>

            <div className="w-32 h-32 rounded-full bg-[#0b3b2e] text-white flex items-center justify-center font-semibold shadow-lg">
              KactusLabs
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center text-lg font-bold text-purple-600">
                 <img src={WooCommerceLogo} />
              </div>
              <span className="mt-3 text-sm text-slate-600">WooCommerce</span>
            </div>
          </div>

        </div>
      </section>


      {/* Integration Cards */}
      <section className="container-p py-24 text-center">

        <h2 className="text-3xl md:text-4xl font-semibold mb-16">
          Seamlessly integrate KactusLabs <br /> with your tech stack
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">

          {/* Shopify */}
          <div className="bg-[#eef2ea] rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-green-600 font-bold mb-6">
              <img src={ShopifyLogo} alt="Shopify Logo" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Shopify</h3>
            <p className="text-slate-600 mb-6">
              Automatically sync products, orders, customers, and
              inventory directly from Shopify.
            </p>
            <Link
              to="/shopify"
              className="text-[#0b3b2e] font-medium hover:underline"
            >
              Learn More →
            </Link>
          </div>

          {/* WooCommerce */}
          <div className="bg-[#eef2ea] rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-purple-600 font-bold mb-6">
              <img src={WooCommerceLogo} alt="WooCommerce Logo" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">WooCommerce</h3>
            <p className="text-slate-600 mb-6">
              Sync products and order data seamlessly from WooCommerce into KactusLabs.
            </p>
            <span className="text-slate-500 font-medium">Coming Soon →</span>
          </div>

          {/* API */}
          <div className="bg-[#eef2ea] rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-600 font-bold mb-6">
              <img src={KactusLabsAPI} alt="KactusLabs API" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">KactusLabs API</h3>
            <p className="text-slate-600 mb-6">
              Build custom integrations and automate advanced workflows using our open API.
            </p>
            <button className="text-[#0b3b2e] font-medium hover:underline">
              View Docs →
            </button>
          </div>

        </div>

      </section>

      {/* CTA Section */}
      <section className="container-p pb-24">
        <div className="bg-gradient-to-r from-[#0b3b2e] to-[#122c22] text-white rounded-3xl p-12 md:p-16 flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 max-w-xl leading-tight">
              Start elevating product experiences with KactusLabs today
            </h2>
            <button className="px-6 py-3 bg-white text-[#0b3b2e] rounded-full font-medium hover:opacity-90 transition">
              Schedule a Demo
            </button>
          </div>

          <div className="max-w-md text-slate-300 text-sm">
            <p>
              “Integration was seamless. Everything works beautifully with our commerce stack and improves clarity instantly.”
            </p>
            <p className="mt-4 font-medium text-white">
              — Shopify Brand Owner
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}