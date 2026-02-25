"use client";

import { Search, Menu, MapPin } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <MapPin size={24} className="text-primary" />
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              Wander<span className="text-primary">lust</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#" className="text-gray-900 hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              Destinations
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              Itineraries
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              Travel Tips
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              Food & Travel
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Search size={18} className="text-gray-600" />
            </button>
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={18} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-100">
            <nav className="flex flex-col space-y-3 text-sm font-medium">
              <a href="#" className="text-gray-900 hover:text-primary transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                Destinations
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                Itineraries
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                Travel Tips
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                Food & Travel
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
