import React from 'react';
import { Home, User, Book, MessageSquare, Code } from 'lucide-react';

const Navigation = () => {
  const links = [
    { name: 'Home', icon: <Home size={20} /> },
    { name: 'Sobre Mim', icon: <User size={20} /> },
    { name: 'Blog', icon: <Book size={20} /> },
    { name: 'Skills', icon: <Code size={20} /> },
    { name: 'Contato', icon: <MessageSquare size={20} /> },
  ];

  return (
    <nav className="flex flex-col md:flex-row md:space-x-8">
      {links.map((link) => (
        <a
          key={link.name}
          href={`#${link.name.toLowerCase()}`}
          className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
        >
          {link.icon}
          <span className="ml-2">{link.name}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navigation;