  import FAQSection from "../components/FAQSection";
  import HeroMain from "../assets/images/Home/Hero-Main.png";

  // Icons
  import FastImplementation from "../assets/images/Home/Icons/fast-implementation.svg";
  import RealTime from "../assets/images/Home/Icons/real-time.svg";
  import ZeroDowntime from "../assets/images/Home/Icons/zero-downtime.svg";
  import APIIcon from "../assets/images/Home/Icons/API.svg";

  import VirtualTryOn from "../assets/images/Home/Virtual-Try-On.jpg";
  import Fifteen from "../assets/images/Home/Icons/15.svg";
  import Forty from "../assets/images/Home/Icons/40.svg";
  import Eighty from "../assets/images/Home/Icons/80.svg";
  import { motion } from "framer-motion"
import { useRef } from "react"


 /* Floating Particles Background */
function FloatingParticles() {
  const particles = Array.from({ length: 25 })

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          initial={{
            x: Math.random() * 1600,
            y: Math.random() * 900,
            opacity: 0
          }}
          animate={{
            y: [null, -300],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

/* 3D Tilt Card */
function TiltCard({ children }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = -(y - centerY) / 25
    const rotateY = (x - centerX) / 25

    ref.current.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`
  }

  const reset = () => {
    ref.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="transition-transform duration-300"
    >
      {children}
    </div>
  )
}
  function SectionTitle({ eyebrow, title, subtitle, align = "center" }) {
    return (
      <div className={`text-${align} mb-12`}>
        {eyebrow && (
          <div className="text-sm tracking-wider uppercase text-emerald-700">
            {eyebrow}
          </div>
        )}
        <h2 className="mt-2 text-3xl md:text-4xl font-serif text-slate-900">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  function Stat({ value, label }) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
        <div className="text-3xl font-semibold text-emerald-800">{value}</div>
        <div className="mt-2 text-sm text-slate-600">{label}</div>
      </div>
    );
  }

  export default function Dashboard() {
    return (
      <main className="bg-[#F5F6F2] text-slate-900">

    {/* HERO */}
<section className="relative py-24 overflow-hidden">

  {/* Soft background glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-300/20 blur-3xl rounded-full" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-400/10 blur-3xl rounded-full" />
  </div>

  <div className="relative container mx-auto px-6">
    <div className="bg-[#EDEFE6] rounded-[40px] px-10 py-20 md:px-16 md:py-24 grid md:grid-cols-2 gap-16 items-center shadow-[0_40px_80px_rgba(0,0,0,0.08)]">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl font-serif leading-tight text-slate-900"
        >
          AI-Powered Try-Ons for
          <br />
          Smarter Fashion Commerce
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 text-slate-600 max-w-lg text-lg"
        >
          KactusLabs helps fashion brands reduce returns and increase
          conversions with AI-generated virtual try-ons and intelligent
          recommendations.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-10 flex gap-6 flex-wrap"
        >
          <motion.button
            whileHover={{
              scale: 1.06,
              y: -3,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.15)"
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-emerald-900 text-white px-8 py-4 rounded-full font-medium"
          >
            Schedule a Demo
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.06,
              y: -3,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border border-slate-300 px-8 py-4 rounded-full font-medium"
          >
            See it in Action
          </motion.button>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.02 }}
        className="rounded-3xl overflow-hidden shadow-[0_60px_100px_rgba(0,0,0,0.2)]"
      >
        <motion.img
          src={HeroMain}
          alt="Preview"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4 }}
          className="w-full object-cover"
        />
      </motion.div>

    </div>
  </div>
</section>


      {/* ENTERPRISE READY */}
  {/* ENTERPRISE READY */}
<section className="relative bg-[#F5F6F2] py-32 overflow-hidden">

  {/* Soft Background Glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-32 right-10 w-[400px] h-[400px] bg-emerald-200/30 blur-3xl rounded-full" />
  </div>

  <div className="relative container mx-auto px-6 text-center">

    {/* Title Animation */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-serif text-slate-800">
        Enterprise-Ready
      </h2>
      <p className="mt-4 text-slate-500">
        Built for scale. Designed for reliability.
      </p>
    </motion.div>

    {/* Feature Cards */}
    <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-10">

      {[
        { label: "Fast Implementation", icon: FastImplementation },
        { label: "Real-Time Brand Audit", icon: RealTime },
        { label: "Zero Downtime", icon: ZeroDowntime },
        { label: "API-Based Integration", icon: APIIcon },
      ].map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: index * 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          whileHover={{
            y: -12,
            scale: 1.05,
            boxShadow: "0px 40px 80px rgba(0,0,0,0.08)"
          }}
          className="bg-[#F2F3EE] rounded-3xl py-14 px-6 border border-slate-200 transition-all"
        >
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-emerald-950 shadow-lg">
            <img src={item.icon} alt={item.label} className="w-7 h-7" />
          </div>

          <div className="text-slate-800 font-medium text-lg">
            {item.label}
          </div>
        </motion.div>
      ))}

    </div>

    {/* Compatibility Box */}
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-24 bg-[#F2F3EE] rounded-[32px] p-14 border border-slate-200 text-left shadow-sm"
    >

      {/* Compatible With */}
      <h3 className="text-xl font-semibold text-slate-800">
        Compatible With
      </h3>

      <div className="mt-8 flex flex-wrap gap-5">
        {["Shopify", "Magento", "WooCommerce", "Custom APIs"].map((item) => (
          <motion.span
            key={item}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#ffffff",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.05)"
            }}
            className="px-6 py-3 rounded-full bg-[#E6E9DC] text-slate-700 text-sm transition"
          >
            {item}
          </motion.span>
        ))}
      </div>

      {/* Security & Compliance */}
      <h3 className="mt-14 text-xl font-semibold text-slate-800">
        Security & Compliance
      </h3>

      <div className="mt-8 flex flex-wrap gap-5">
        {["SOC 2", "GDPR Ready", "ISO 27001"].map((item) => (
          <motion.span
            key={item}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.05)"
            }}
            className="px-6 py-3 rounded-full border border-slate-300 bg-white text-slate-700 text-sm transition"
          >
            {item}
          </motion.span>
        ))}
      </div>

    </motion.div>

  </div>
</section>
        {/* FROM BROWSING TO BUYING */}

  {/*
  {/* FROM BROWSING TO BUYING */}
  <section id="features" className="bg-[#EDEFE6] py-20 overflow-hidden">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

      {/* Image Animation */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="rounded-3xl overflow-hidden shadow-xl bg-white border border-slate-200 aspect-[4/5]"
      >
        <motion.img
          src={VirtualTryOn}
          alt="Virtual Try-On Preview"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Text + Cards Animation */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SectionTitle
          align="left"
          title="From browsing to buying, visualized"
          subtitle="Helping brands and customers make confident buying decisions."
        />

        <div className="space-y-4 mt-6">
          {[
            "Virtual Try-On",
            "AI Size Recommendation",
            "AI Photoshoot Studio",
            "AI Fashion Coach",
            "WhatsApp Marketing",
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition"
            >
              <div className="font-medium text-slate-800">{item}</div>
              <div className="text-sm text-slate-600 mt-1">
                Short description about this feature.
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  </section>
  */

        {/* PRICING STRIP */}
        <section className="bg-emerald-950 text-white py-16 text-center">
          <h3 className="text-3xl font-serif max-w-3xl mx-auto">
            KactusLabs pricing is designed around how each brand operates.
          </h3>
          <a className="inline-block mt-6 bg-white text-emerald-900 px-6 py-3 rounded-full">
            Contact for pricing
          </a>
        </section>


        {/* WHY IT MATTERS */}
    {/* WHY IT MATTERS */}
 {/* WHY IT MATTERS */}
<section className="relative bg-[#F4F5F1] py-32 overflow-hidden">

  {/* Soft Background Glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-emerald-200/30 blur-3xl rounded-full" />
  </div>

  <div className="relative container mx-auto px-6 text-center">

    {/* Title Animation */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-serif text-slate-800">
        Why It Matters
      </h2>
      <p className="mt-4 text-slate-500">
        Powering the Next Generation of Fashion
      </p>
    </motion.div>

    {/* Logos */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.6 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-12 flex flex-wrap justify-center gap-12 text-sm text-slate-500"
    >
      <span>logolpsum</span>
      <span>logolpsum</span>
      <span>LOGOIPSUM</span>
      <span>logolpsum</span>
      <span>logolpsum</span>
    </motion.div>

    {/* Stat Cards */}
    <div className="mt-20 grid md:grid-cols-3 gap-10">

      {[
        {
          icon: Fifteen,
          title: "Reduction in Returns",
          desc: "Based on 50,000+ customer interactions across our partner network.",
          dark: true
        },
        {
          icon: Forty,
          title: "Increase in Add-to-Cart",
          desc: "Shoppers are more confident when they can visualize the product.",
        },
        {
          icon: Eighty,
          title: "Lower Production Costs",
          desc: "Replace expensive photoshoots with AI-generated on-model imagery.",
        },
      ].map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: index * 0.2,
            ease: [0.22, 1, 0.36, 1]
          }}
          viewport={{ once: true }}
          whileHover={{
            y: -15,
            scale: 1.03,
            boxShadow: "0px 40px 80px rgba(0,0,0,0.08)"
          }}
          className={`rounded-3xl p-10 text-left transition-all ${
            card.dark
              ? "text-white bg-gradient-to-br from-emerald-950 to-emerald-800"
              : "bg-white border border-slate-200 text-slate-800"
          }`}
        >
          <motion.img
            src={card.icon}
            alt=""
            className="w-16 mb-6"
            whileHover={{ rotate: 5, scale: 1.1 }}
          />

          <div className="text-lg font-semibold">
            {card.title}
          </div>

          <p className={`mt-4 text-sm ${
            card.dark ? "opacity-80" : "text-slate-600"
          }`}>
            {card.desc}
          </p>
        </motion.div>
      ))}

    </div>

  </div>
</section>


   {/* TESTIMONIALS – ULTRA FLOATING PREMIUM */}
{/* TESTIMONIALS – SAME SIZE PREMIUM VERSION */}
<section className="relative bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 py-28 overflow-hidden">

  <div className="relative container mx-auto px-6">

    {/* Title */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto"
    >
      <h2 className="text-4xl md:text-5xl font-serif text-emerald-100">
        Why Fashion Brands love KactusLabs
      </h2>
      <p className="mt-4 text-emerald-200/80">
        Real stories from brands that reduced returns and increased conversions.
      </p>
    </motion.div>

    {/* Cards Grid (Same Layout) */}
    <div className="mt-20 grid md:grid-cols-4 gap-8">

      {[
        "KactusLabs improved our conversions instantly.",
        "Customers trust the virtual try-on experience.",
        "Reduced returns significantly within weeks.",
        "Saved production costs on photoshoots.",
        "Boosted add-to-cart rate dramatically.",
        "Better visual storytelling for products.",
        "Improved customer confidence.",
        "Seamless integration with our store."
      ].map((text, i) => (

       <motion.div
  key={i}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ 
    y: -8,
    scale: 1.03,
    boxShadow: "0px 25px 60px rgba(0,0,0,0.25)"
  }}
  animate={{ y: [0, -6, 0] }}
  transition={{
    opacity: { duration: 0.6, delay: i * 0.08 },
    y: {
      duration:  2 + (i % 2),
      repeat: Infinity,
      ease: "easeInOut"
    }
  }}
  className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 transition-all
  ${i % 2 === 1 ? "md:mt-12" : ""}`}
>
          <div className="text-emerald-100 font-semibold">
            ★★★★★
          </div>

          <p className="mt-4 text-sm text-emerald-50/90 leading-relaxed">
            {text}
          </p>

          <div className="mt-4 text-xs text-emerald-200/70">
            Fashion Brand Partner
          </div>
        </motion.div>

      ))}

    </div>

  </div>
</section>

  {/* FAQ SECTION */}
  <FAQSection />

        {/* CTA */}
        <section className="bg-[#F5F6F2] py-20 text-center">
          <h3 className="text-3xl font-serif">
            Start elevating product experiences with KactusLabs today
          </h3>
          <a className="inline-block mt-6 bg-emerald-900 text-white px-6 py-3 rounded-full">
            Schedule a Demo
          </a>
        </section>

      </main>
    );
  }