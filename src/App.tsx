import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Instagram, Code, GraduationCap, Music } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img 
              src="https://i.imgur.com/expmefO.jpeg" 
              alt="Leonard Giesen"
              className="rounded-full w-48 h-48 mx-auto mb-6 object-cover border-4 border-blue-400 shadow-lg"
            />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-bold text-center mb-4"
          >
            Leonard Giesen
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-blue-200 text-center mb-8"
          >
            Schüler am Kaiser-Karls-Gymnasium Aachen
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <a href="https://github.com/Fade32" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors"><Github size={24} /></a>
            <a href="mailto:leonard.giesen@icloud.com" className="hover:text-blue-300 transition-colors"><Mail size={24} /></a>
            <a href="https://www.instagram.com/l30_o7" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors"><Instagram size={24} /></a>
          </motion.div>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white/10 backdrop-blur-lg py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Über Mich</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 p-6 rounded-lg backdrop-blur-sm"
              >
                <GraduationCap className="w-12 h-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">Bildung</h3>
                <p className="text-blue-200">Abiturient am Kaiser-Karls-Gymnasium mit Schwerpunkt in Naturwissenschaften</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 p-6 rounded-lg backdrop-blur-sm"
              >
                <Code className="w-12 h-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">Programmierung</h3>
                <p className="text-blue-200">Begeisterter Programmierer mit Interesse an Webentwicklung und KI</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 p-6 rounded-lg backdrop-blur-sm"
              >
                <Music className="w-12 h-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">Hobbys</h3>
                <p className="text-blue-200">Musik, Sport und Technologie begeistern mich in meiner Freizeit</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Eigenes Videospiel & KI-Entwicklung</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 rounded-lg overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2FtZSxkZXZlbG9wbWVudHx8fHx8fDE3MDk1Njc4MDA&ixlib=rb-4.0.3&q=80&w=500" 
                  alt="Game Development"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Eigenes Videospiel</h3>
                  <p className="text-blue-200">Entwicklung eines spannenden 3D-Spiels mit Unity und C#</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white/5 rounded-lg overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8YWksbWFjaGluZSxsZWFybmluZ3x8fHx8fDE3MDk1Njc4NTA&ixlib=rb-4.0.3&q=80&w=500" 
                  alt="AI Development"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">KI-Entwicklung</h3>
                  <p className="text-blue-200">Entwicklung von KI-Modellen für Bildverarbeitung und Datenanalyse</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black/20 py-8">
        <div className="container mx-auto px-4 text-center text-blue-200">
          <p>© 2024 Leonard Giesen | Kaiser-Karls-Gymnasium Aachen</p>
        </div>
      </footer>
    </div>
  );
}

export default App;