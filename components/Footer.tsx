import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { AdZone } from "./AdZone";

export function Footer() {
  return (
    <>
      {/* Pre-footer leaderboard ad */}
      <div className="bg-gray-100 py-4 flex justify-center border-t border-gray-200">
        <AdZone width={970} height={90} zoneClass="next-ads-zone-4" id="ad-zone-leaderboard" />
      </div>

      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
            {/* About */}
            <div>
              <h3 className="text-lg font-bold mb-3">Wanderlust</h3>
              <p className="text-gray-400 leading-relaxed">
                Your guide to the world's most inspiring destinations. Routes, tips,
                and stories to fuel your next adventure.
              </p>
            </div>

            {/* Destinations */}
            <div>
              <h3 className="font-semibold mb-3">Destinations</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Asia</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Europe</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Latin America</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Africa</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Advertise</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-3">
                <a href="#" className="p-2 bg-gray-800 hover:bg-primary rounded-lg transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="p-2 bg-gray-800 hover:bg-primary rounded-lg transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="p-2 bg-gray-800 hover:bg-primary rounded-lg transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="p-2 bg-gray-800 hover:bg-primary rounded-lg transition-colors">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-xs">
            <p>&copy; 2026 Wanderlust. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
