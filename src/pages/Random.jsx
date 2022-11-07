import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { generateLocation } from '../utils/generateLocation';

const Random = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const coords = generateLocation();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=ad232c5285db15075e3e2ece306f1649`
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
      random citi
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <div>{data.name}</div>
        </div>
      )}
    </div>
  );
};

export default Random;
