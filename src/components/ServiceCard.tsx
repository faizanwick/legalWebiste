'use client';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { IconType } from 'react-icons';
import * as FaIcons from 'react-icons/fa';

interface Service {
  id: number;
  title: string;
  description: string;
  details: string;
  duration: string;
  price: number;
  required_doc: string;
  icon: string;
  procedures?: string[];
}

interface ServiceCardProps {
  service: Service;
  isExpanded: boolean;
  onClick: () => void;
}

export default function ServiceCard({ service, isExpanded, onClick }: ServiceCardProps) {
  const IconComponent = (FaIcons as { [key: string]: IconType })[service.icon];

  return (
    <motion.div
      className={`cursor-pointer group border rounded-xl overflow-hidden ${
        isExpanded ? 'bg-white shadow-lg' : 'bg-gray-50 hover:bg-gray-100'
      }`}
      initial={false}
      animate={{ height: isExpanded ? 'auto' : '160px' }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="p-6"
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && onClick()}
      >
        <div className="flex items-start gap-4">
          {IconComponent && (
            <div className="p-3 bg-primary/10 rounded-lg">
              <IconComponent className="w-6 h-6 text-blue-600" />
            </div>
          )}
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className={`text-gray-600 ${isExpanded ? 'mb-4' : ''}`}>
              {service.description}
            </p>
          </div>
          
          <ChevronDownIcon
            className={`w-6 h-6 flex-shrink-0 transform transition-transform ${
              isExpanded ? 'rotate-180 text-blue-600' : 'text-gray-400'
            }`}
          />
        </div>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="pt-4 border-t border-gray-200"
          >
            <p className="text-gray-600 leading-relaxed">{service.details}</p>
            
            {service.procedures && (
              <ul className="mt-4 space-y-2">
                {service.procedures.map((procedure, index) => (
                  <li 
                    key={index}
                    className="flex items-center text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {procedure}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4 flex items-center space-x-2 text-sm">
              <span className="text-blue-600 font-medium">Processing Time:</span>
              <span className="text-gray-600">{service.duration}</span>
            </div>

            <div className="mt-4 flex items-center space-x-2 text-sm">
              <span className="text-blue-600 font-medium">Price:</span>
              <span className="text-gray-600">{service.price}</span>
            </div>

            <div className="mt-4 flex items-center space-x-2 text-sm">
              <span className="text-blue-600 font-medium">Required Documents:</span>
              <span className="text-gray-600">{service.required_doc}</span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}