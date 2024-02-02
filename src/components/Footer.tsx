import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Footer() {
  /* TODO: footer */
  return (
    <footer className="h-12 bg-gray-800/90  w-full text-zinc-200 border-b border-gray-900 drop-shadow-md flex justify-center items-center">
      <ul className="flex space-x-2">
        <li>
          <a
            href="https://www.linkedin.com/in/heorhii-aksiuk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/heorhii-aksiuk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a
            href="mailto:aksiuk.heorhii@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail size={30} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
