const Footer = () => {
  return (
    <div className="bg-[#0f0f0f] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h2 className="text-white text-xl font-semibold">
            You<span className="text-red-600">Tube</span> Demo
          </h2>
          <p className="text-sm mt-1">
            Bu sayt faqat o'quv maqsadida yaratilgan
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mb-6">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Press</a>
          <a href="#" className="hover:text-white">Copyright</a>
          <a href="#" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">Creators</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
        <div className="text-center text-xs border-t border-gray-700 pt-4">
          © 2026 YouTube Demo • Made by Sardor
        </div>
      </div>
    </div>
  );
};

export default Footer;
