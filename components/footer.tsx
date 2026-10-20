import { Github, Linkedin, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center gap-4 mb-3">
            <a className="footer-social portfolio-social" href="https://naresh-rana-1999.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Portfolio">
              <Globe className="h-5 w-5 transition-colors" />
            </a>
            <a className="footer-social linkedin-social" href="https://linkedin.com/in/nareshrana1999" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 transition-colors" />
            </a>
            <a className="footer-social github-social" href="https://github.com/nareshrana1999" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 transition-colors" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {currentYear} Naresh Rana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
