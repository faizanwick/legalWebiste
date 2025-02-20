'use client';
import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // Import the lightbox styles

const portfolioImages = [
  '/images/portfolio/doc1.jpg',
  '/images/portfolio/doc2.jpg',
  '/images/portfolio/doc3.jpg',
  '/images/portfolio/doc4.jpg',
  '/images/portfolio/doc5.jpg',
  '/images/portfolio/doc6.jpg',
  '/images/portfolio/doc7.jpg',
  '/images/portfolio/doc8.jpg',
];

export default function PortfolioSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolioImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <Image
                src={src}
                alt={`Document ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={portfolioImages[photoIndex]}
          nextSrc={portfolioImages[(photoIndex + 1) % portfolioImages.length]}
          prevSrc={
            portfolioImages[
              (photoIndex + portfolioImages.length - 1) % portfolioImages.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + portfolioImages.length - 1) % portfolioImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % portfolioImages.length)
          }
        />
      )}
    </section>
  );
}