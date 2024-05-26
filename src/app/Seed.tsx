'use client';

const Seed = () => {
  const seed = async () => {
    try {
      const res = await fetch('/api/seed', {
        method: 'POST',
      });
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  return <button onClick={seed}>Seed</button>;
};

export default Seed;
