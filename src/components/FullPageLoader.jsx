// src/components/FullPageLoader.jsx

import React from 'react';
import { Loader2 } from 'lucide-react'; // Lucide spinner icon

export default function FullPageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-indigo-600" />
        <p className="text-lg font-medium text-gray-700">Loading, please wait...</p>
      </div>
    </div>
  );
}
