"use client"
import { Button } from '../components/ui/button'

export function DownloadButtons() {
  const handleDownload = (store: string) => {
    if (store === 'Play Store') {
      window.location.href = "https://play.google.com/store/apps/details?id=com.garnox.geekhaven";
    } else {
      alert(`Coming soon to ${store}!`);
    }
  };

  return (
    <div className="flex justify-center space-x-4">
      <Button onClick={() => handleDownload('Play Store')} className="bg-green-600 hover:bg-green-700">
        Download on Play Store
      </Button>
      <Button onClick={() => handleDownload('App Store')} className="bg-blue-600 hover:bg-blue-700">
        Download on App Store
      </Button>
    </div>
  );
}
