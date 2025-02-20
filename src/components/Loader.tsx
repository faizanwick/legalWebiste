'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <div className="animate-pulse">
            <Image
            src="/images/logo.png" // or /images/logo.png
            alt="LACS Logo"
            width={128}
            height={128}
            className="animate-logo-pulse"
            priority
            />
      </div>
    </div>
  );
}