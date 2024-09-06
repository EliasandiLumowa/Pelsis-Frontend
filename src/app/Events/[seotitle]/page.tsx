"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Navbar from '@/app/components/navbar';
import '@/app/styles/globals.css';

export default function EventDetail() {
  const [event, setEvent] = useState(null);
  const [event2023, setEvent2023] = useState(null);
  const { seotitle } = useParams(); // Get seotitle from the URL
  const [formData, setFormData] = useState({
    namalengkap: '',
    ttl: '',
    noHP: '',
    email: '',
  });

  useEffect(() => {
    if (seotitle) {
      const fetchEvent = async () => {
        try {
          const response = await axios.get(`http://localhost:1337/api/events?filters[seotitle][$eq]=${seotitle}&populate=*`);
          if (response.data.data.length > 0) {
            setEvent(response.data.data[0].attributes);
          } else {
            console.error('Event not found');
          }
        } catch (error) {
          console.error('Error fetching event:', error);
        }
      };

      const fetchEvent2023 = async () => {
        try {
          const response = await axios.get(`http://localhost:1337/api/event23s?filters[seotitle][$eq]=${seotitle}&populate=*`);
          if (response.data.data.length > 0) {
            setEvent2023(response.data.data[0].attributes);
          } else {
            console.error('Event not found');
          }
        } catch (error) {
          console.error('Error fetching event:', error);
        }
      };

      fetchEvent2023();
      fetchEvent();
    }
  }, [seotitle]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:1337/api/registrations', {
        data: formData,
      });

      if (response.status === 200) {
        alert('Pendaftaran berhasil!');
        // Reset form
        setFormData({
          namalengkap: '',
          ttl: '',
          noHP: '',
          email: '',
        });
      } else {
        alert('Terjadi kesalahan saat mendaftar.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Terjadi kesalahan saat mendaftar.');
    }
  };

  if (!event && !event2023) {
    return <div>Loading...</div>;
  }

  // Determine which event to display
  const currentEvent = event2023 || event;

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-white overflow-hidden" style={{ backgroundImage: 'url(/Background-White.png)', backgroundAttachment: 'fixed' }}>
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex space-x-8 justify-center">
        {/* Kolom Detail Event */}
        {currentEvent && (
          <div className="w-1/3 bg-white text-black shadow-lg rounded-lg px-8 py-8">
            <img 
              src={`http://localhost:1337${currentEvent.image.data.attributes.url}`} 
              alt={currentEvent.title} 
              className="mt-auto w-full h-80 mx-auto block rounded-t-lg object-cover rounded-b-lg" 
            />
            <div className="px-4 py-4">
              <h1 className="text-xl font-bold mb-4 text-center">{currentEvent.title}</h1>
              <div className="mb-4">
                <h2 className="text-lg font-semibold">Deskripsi</h2>
                <p className="text-gray-700">{currentEvent.deskripsi}</p>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold">Benefit</h2>
                <p className="text-gray-700">{currentEvent.benefit}</p>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold">Waktu Pelaksanaan</h2>
                <p className="text-gray-700"><strong>Tanggal:</strong> {currentEvent.tanggal}</p>
                <p className="text-gray-700"><strong>Jam:</strong> {currentEvent.jam}</p>
                <p className="text-gray-700"><strong>Tempat:</strong> {currentEvent.lokasi}</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Kolom Formulir Pendaftaran */}
        <div className="w-1/2 bg-white text-black shadow-lg rounded-lg px-8 py-8">
          <div className="item-center text-center">
            <span className="text-3xl font-bold text-pink-700 mb-2">Diklat Kepemimpinan </span> 
            <span className="text-3xl font-bold text-black mb-2">Siswa Kristen</span>
            <p className="text-xl font-semibold mb-6 mt-4">Daftarkan dirimu sekarang juga!</p>
          </div>

          <form onSubmit={handleSubmit} method="POST">
            <div className="mb-10">
              <label className="text-black font-semibold mb-4">Nama Lengkap</label>
              <input 
                type="text" 
                name="namalengkap" 
                className="w-full px-3 py-2 focus:outline-none"
                value={formData.namalengkap}
                onChange={handleChange}
                required 
              />
              <div className="mt-1 h-[1px] bg-black w-full"></div>
            </div>

            <div className="mb-10">
              <label className="text-black font-semibold mb-4">Tempat, Tanggal Lahir</label>
              <input 
                type="text" 
                name="ttl" 
                className="w-full px-3 py-2 focus:outline-none"
                value={formData.ttl}
                onChange={handleChange}
                required 
              />
              <div className="mt-1 h-[1px] bg-black w-full"></div>
            </div>

            <div className="mb-10">
              <label className="text-black font-semibold mb-4">No Handphone (Whatsapp)</label>
              <input 
                type="tel" 
                name="noHP" 
                className="w-full px-3 py-2 focus:outline-none"
                value={formData.noHP}
                onChange={handleChange}
                required 
              />
              <div className="mt-1 h-[1px] bg-black w-full"></div>
            </div>

            <div className="mb-10">
              <label className="text-black font-semibold mb-4">Email</label>
              <input 
                type="email" 
                name="email" 
                className="w-full px-3 py-2 focus:outline-none"
                value={formData.email}
                onChange={handleChange}
                required 
              />
              <div className="mt-1 h-[1px] bg-black w-full"></div>
            </div>

            <button className="w-full bg-pink-700 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-800" type="submit">Daftar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
