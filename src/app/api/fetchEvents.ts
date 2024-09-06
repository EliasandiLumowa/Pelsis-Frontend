// // src/app/api/fetchImages.ts

// import axios from 'axios';

// const url = "http://localhost:1337";

// export const fetchImage = async () => {
//   try {
//     const response = await axios.get(`${url}/api/events?populate=*`);
//     const data = response.data.data;

//     // Mapping data ke dalam format yang sesuai
//     const mappedImage = data.map((item: any) => ({
//       image: item.attributes.image.data.attributes.formats.large.url,
//       title: item.attributes.title,
//       deskripsi: item.attributes.deskripsi,
//       benefit: item.attributes.benefit,
//       jam: item.attributes.jam,
//       lokasi: item.attributes.lokasi,
//       tanggal: item.attributes.tanggal,
//     }));

//     return mappedImage;
//   } catch (error) {
//     console.error('Error fetching Image:', error);
//     throw error;
//   }
// };
