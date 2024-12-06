import React from 'react';
import Layout from './components/Layout';
import ContactCard from './components/ContactCard';
import SkillCard from './components/SkillCard';
import BlogPost from './components/BlogPost';
import { skills } from './data/skills';

function App() {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Hero Section */}
        <section id="home" className="text-center py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            André Rodrigues de Deus Souza
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Técnico em Cibersistemas para Automação/Senai Centro 4.0
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Download CV
            </button>
            <button className="border border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition-colors">
              Contato
            </button>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Blog</h2>
          <BlogPost />
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contato</h2>
          <ContactCard />
        </section>
      </div>
    </Layout>
  );
}

export default App;