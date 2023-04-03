import React, { useEffect, useState } from "react";
import "./Memory.css";
import axios from "axios";
import Memory from "./Memory";
const URL = "http://localhost:5000/memories";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Memories = () => {
  const [memories, setMemories] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setMemories(data.memories));
  }, []);
  console.log(memories);
  return (
    <div>
      <ul>
        {memories &&
          memories.map((memory, i) => (
            <li key={i}>
              <Memory memory={memory} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Memories;
