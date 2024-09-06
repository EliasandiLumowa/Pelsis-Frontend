// utils/updatevisitorstats.ts
export default async function updateVisitorStats() {
  try {
    const response = await fetch('/api/visitorstats/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        today: ' ',
        online: ' ',
        total: ' ',
      }),
    });
    if (!response.ok) throw new Error('Failed to update visitor stats');
  } catch (error) {
    console.error('Error updating visitor stats:', error);
  }
}
