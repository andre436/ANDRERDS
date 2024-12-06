import React from 'react';
import { Phone, Mail, Github, Linkedin, MessageSquare } from 'lucide-react';

const ContactCard = () => {
  const contacts = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefone',
      value: '+55 (31) 99205-1436',
      link: 'tel:+5531992051436',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'andrerdeus087@gmail.com',
      link: 'mailto:andrerdeus087@gmail.com',
      color: 'bg-red-50 text-red-600',
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: 'GitHub',
      value: 'Veja meus projetos',
      link: 'https://github.com',
      color: 'bg-gray-50 text-gray-600',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'Conecte-se comigo',
      link: 'https://linkedin.com',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'WhatsApp',
      value: '+55 (31) 99205-1436',
      link: 'https://wa.me/5531992051436',
      color: 'bg-green-50 text-green-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {contacts.map((contact) => (
        <a
          key={contact.title}
          href={contact.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-lg ${contact.color}`}>
              {contact.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{contact.title}</h3>
              <p className="text-gray-600">{contact.value}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContactCard;