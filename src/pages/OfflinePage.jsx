// src/components/OfflinePage.jsx

import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';  // Lucide icon

export default function OfflinePage() {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md text-center space-y-6">
        <Alert>
          <AlertTriangle className="h-8 w-8 mb-2 mx-auto" />
          <AlertTitle className="text-xl font-bold text-red-500">You Are Offline</AlertTitle>
          <AlertDescription>
            <p className="text-gray-700 mt-2">
              ⚠️ You are not connected. It looks like you have lost your internet connection or the servers are temporarily unavailable.
            </p>
            <p className="text-gray-700 mt-2">
              Please check your connection and try again.
            </p>
          </AlertDescription>
        </Alert>

        <Button variant="outline" onClick={handleRetry}>
          🔄 Retry
        </Button>
      </div>
    </div>
  );
}
