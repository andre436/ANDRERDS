import React from 'react';
import { Github } from 'lucide-react';

const BlogPost = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Github className="w-6 h-6 text-gray-600" />
        <h3 className="text-xl font-semibold">Última Atividade no GitHub</h3>
      </div>
      <div className="prose max-w-none">
        <p className="text-gray-600">
          Confira minha última atividade e contribuições no GitHub. Acompanhe meus projetos
          e desenvolvimento profissional.
        </p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-4 text-green-600 hover:text-green-700"
        >
          <span>Ver no GitHub</span>
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogPost;