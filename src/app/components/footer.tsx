import { useState } from 'react';

export default function Footer() {
  const [visitorStats] = useState({
    today: 1,
    online: 2,
    total: 3,
  });

  return (
    <footer className="bg-pink-700 text-white py-4">
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-bold">Statistik Pengunjung</h2>
        <div className="flex justify-center items-center mt-2 space-x-4">
          <div className="flex items-center space-x-1">
            <span>Pengunjung hari ini: {visitorStats.today}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>Pengunjung Online: {visitorStats.online}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>Total Pengunjung: {visitorStats.total}</span>
          </div>
        </div>
        <div className="flex justify-center mt-2 space-x-4">
          <p>@ 2024 - PELSIS SULUT</p>
        </div>
      </div>
    </footer>
  );
}
