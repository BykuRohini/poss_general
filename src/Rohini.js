import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Rohini = () => {
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'http://3.111.70.84:8091/test/v1/loyalty/customer-details',
          {
            base_currency: 'INR',
            mobile_number: '7021438020',
            client_id: 8,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        console.log(response)
        setCustomerData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
   
    fetchData();
  }, []);
  console.log(customerData)

  return (
    <div>
      <h1>Customer Details</h1>
      {customerData ? (
        <pre>{JSON.stringify(customerData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Rohini;