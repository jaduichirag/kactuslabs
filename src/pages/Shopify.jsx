export default function Shopify() {
  return (
    <main className="bg-[#f6f7f4] text-[#0f172a]">

      {/* Hero */}
      <section className="bg-[#e9efe4] py-24">
        <div className="container-p text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 max-w-3xl mx-auto leading-tight">
            KactusLabs + Shopify <br /> Built for Modern Commerce
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Seamlessly sync your Shopify store with KactusLabs to automate
            product workflows, reduce returns, and enhance product clarity.
          </p>

          <button className="px-6 py-3 bg-[#0b3b2e] text-white rounded-full font-medium hover:opacity-90 transition">
            Install on Shopify
          </button>

          {/* Visual */}
          <div className="mt-20 flex items-center justify-center gap-10">
            <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center text-3xl font-bold text-green-600">
              S
            </div>

            <div className="w-32 h-32 rounded-full bg-[#0b3b2e] text-white flex items-center justify-center font-semibold shadow-lg">
              KactusLabs
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container-p py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16">
          Everything you need to power <br /> your Shopify store
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">

          <div className="bg-[#eef2ea] rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">
              Product Sync
            </h3>
            <p className="text-slate-600">
              Automatically sync products, variants, pricing, and inventory
              directly from Shopify into KactusLabs.
            </p>
          </div>

          <div className="bg-[#eef2ea] rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">
              Order & Customer Data
            </h3>
            <p className="text-slate-600">
              Keep order and customer data aligned across platforms
              to power better post-purchase experiences.
            </p>
          </div>

          <div className="bg-[#eef2ea] rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">
              Smart Visual Automation
            </h3>
            <p className="text-slate-600">
              Generate and manage product visuals using AI,
              fully integrated with your Shopify catalog.
            </p>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="container-p pb-24">
        <div className="bg-[#eef2ea] rounded-3xl p-12 md:p-16">

          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            How it works
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div>
              <div className="text-2xl font-semibold mb-4 text-[#0b3b2e]">
                1
              </div>
              <p className="text-slate-600">
                Connect your Shopify store in one click.
              </p>
            </div>

            <div>
              <div className="text-2xl font-semibold mb-4 text-[#0b3b2e]">
                2
              </div>
              <p className="text-slate-600">
                Sync your products and configure automation rules.
              </p>
            </div>

            <div>
              <div className="text-2xl font-semibold mb-4 text-[#0b3b2e]">
                3
              </div>
              <p className="text-slate-600">
                Start improving product clarity and reducing returns.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-p pb-24">
        <div className="bg-gradient-to-r from-[#0b3b2e] to-[#122c22] text-white rounded-3xl p-12 md:p-16 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold mb-6 max-w-2xl mx-auto leading-tight">
            Ready to transform your Shopify store?
          </h2>

          <button className="px-6 py-3 bg-white text-[#0b3b2e] rounded-full font-medium hover:opacity-90 transition">
            Schedule a Demo
          </button>

        </div>
      </section>

    </main>
  )
}