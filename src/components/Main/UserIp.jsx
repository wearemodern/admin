import React, { useState, useEffect } from 'react';

const UserIP = () => {
 const [ip, setIP] = useState('');

 useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIP(data.ip));
 }, []);
localStorage.setItem('IP',ip)
 return null
};

export default UserIP;