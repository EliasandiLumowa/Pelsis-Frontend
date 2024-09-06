// utils/fetchvisitorstats.ts
export default async function fetchVisitorStats() {
  try {
    const response = await fetch('/api/visitorstats');
    if (!response.ok) throw new Error('Failed to fetch visitor stats');
    return await response.json();
  } catch (error) {
    console.error('Error fetching visitor stats:', error);
    return null;
  }
}
