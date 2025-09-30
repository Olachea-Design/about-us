import Image from 'next/image';
import React from 'react';

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, title, width, height }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <h3 className="text-white text-lg font-bold text-center p-4">{title}</h3>
      </div>
    </div>
  );
};

export default ImageCard;