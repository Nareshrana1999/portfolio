export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Naresh Rana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
