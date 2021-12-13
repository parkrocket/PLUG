import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
  const [memberList, setMemeberList] = useState([]);

  useEffect(() => {
    axios
      .get('http://175.125.95.182:4000/users')
      .then((res) => {
        setMemeberList(res.data);
      })
      .catch();
  }, []);

  //itemlist 뿌려주기
  const memberListLi = memberList.map((list, index) => {
    return (
      <li key={index}>
        <p>{list.mb_nick}</p>
      </li>
    );
  });

  return (
    <div>
      <ul>{memberListLi}</ul>
    </div>
  );
};

export default Main;
