import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?lat=46.77&lon=23.59&appid=ad232c5285db15075e3e2ece306f1649'
        );
        setData(response);
      } catch (error) {
        console.error('err');
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      Home
      <div>
        {loading && <div>Loading</div>}
        {!loading && (
          <div>
            <h2>Doing stuff with data</h2>
            <div>{data.name}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
