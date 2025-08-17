import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Sample members (replace with real ones)
const baseMembers = Array.from({ length: 60 }).map((_, i) => ({
  id: i + 1,
  name: `Membre ${i + 1}`,
  role: i % 2 === 0 ? "Fondateur" : "Membre",
  bio: "Bio kout sou manm sa a ak wòl li nan ekip la.",
  photo: `https://via.placeholder.com/150?text=M${i + 1}`,
}));

export default function App() {
  const [query, setQuery] = useState("");

  const filtered = baseMembers.filter((m) =>
    m.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-10 text-center">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Team Pacotny
        </motion.h1>
        <p className="text-lg max-w-2xl mx-auto">
          Anplasman ofisyèl ekip la ak plis pase 50 manm, istwa ak foto yo.
        </p>
      </header>

      {/* Search */}
      <div className="max-w-4xl mx-auto p-6 flex items-center space-x-2">
        <Search className="text-gray-500" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechèch manm..."
          className="w-full border border-gray-300 rounded-lg p-2"
        />
      </div>

      {/* Members */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filtered.map((m) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="shadow-lg rounded-2xl overflow-hidden">
              <img src={m.photo} alt={m.name} className="w-full h-40 object-cover" />
              <CardContent className="p-4">
                <h2 className="font-bold text-xl">{m.name}</h2>
                <p className="text-sm text-gray-500">{m.role}</p>
                <p className="text-gray-700 mt-2">{m.bio}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* History */}
      <section className="bg-white py-12 mt-10 shadow-inner">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">Istwa nou</h2>
          <p className="text-gray-700 leading-relaxed">
            Team Pacotny se yon gwoup sòti nan zòn Paco, Rue de la Montagne,
            kote fanmi yo te toujou ini. Sit sa a la pou onore tout manm yo,
            pataje foto yo ak rakonte istwa ekip la pou jenerasyon kap vini yo.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 text-center py-6 mt-10">
        <p>&copy; {new Date().getFullYear()} Team Pacotny - Tout dwa rezève.</p>
      </footer>
    </div>
  );
}
