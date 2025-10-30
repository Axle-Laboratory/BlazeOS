import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="bg-white text-black font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.img
          src="/assets/blaze26-logo.png"
          alt="BlazeOS Logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="h-32 mb-6"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl font-bold"
        >
          Modular. Visual. Unstoppable.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-lg text-gray-600"
        >
          Flame UI Scripting powers the future of device-hosted UX.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 flex gap-4"
        >
          <a href="/download" className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Download Blaze
          </a>
          <a href="/editions" className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
            Explore Editions
          </a>
        </motion.div>
      </section>

      {/* Editions Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">BlazeOS Editions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { name: 'Blaze', date: '1 Jan 2026', logo: 'blaze26-logo.png' },
            { name: 'Blaze PRO', date: '1 Feb 2026', logo: 'blaze26-pro-logo.png' },
            { name: 'Blaze +', date: '1 Mar 2026', logo: 'blaze26-plus-logo.png' },
            { name: 'Blaze PRO+', date: '15 Mar 2026', logo: 'blaze26-proplus-logo.png' },
          ].map((edition, i) => (
            <motion.div
              key={edition.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <img src={`/assets/${edition.logo}`} alt={edition.name} className="h-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{edition.name}</h3>
              <p className="text-gray-500 mt-2">Launch: {edition.date}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-8">
          * Blaze+ editions may vary by manufacturer readiness.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-sm text-gray-500">
        © 2025 BlazeOS. Built with Flame UI Scripting.
      </footer>
    </main>
  );
}
