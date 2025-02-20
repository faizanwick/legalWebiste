'use client';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
    return (
      <header className="fixed w-full z-50 bg-white shadow-md">
        <nav className="section-container flex justify-between items-center py-4">
          <a href='#' className="text-xl font-bold text-gray-800">LACS</a>
          <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-600 hover:text-primary">
              About
            </a>
            <a href="#services" className="text-gray-600 hover:text-primary">
              Services
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary">
              Contact
            </a>
            <a href="#portfolio" className="text-gray-600 hover:text-primary">
            Portfolio
            </a>
            <a href="#map" className="text-gray-600 hover:text-primary">
              Location
            </a>
          </div>
        </nav>
      </header>
    );
  }