import axios from "axios";
import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import Resize from "./Resize";

const tabs = ["posts", "comments", "albums"];

function Content() {
  //1. useEffect(callback)
  //- Gọi callback mỗi khi component re-render
  //- Gọi callback sau khi component thêm element vào DOM
  //2. useEffect(callback, [])
  //- Chỉ gọi callback mỗi khi component mounted
  //3. useEffect(callback, [deps])
  // -callback sẽ được gọi lại mỗi khi dependency thay đổi

  //----------
  //1. Callback luôn được gọi sau khi component mounted

  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/${type}`).then((res) => {
      setPosts(res.data);
    });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          onClick={() => setType(tab)}
          key={tab}
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "#333",
                }
              : {}
          }
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
          }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Go to Top
        </button>
      )}
      <Resize />
      <Counter />
    </div>
  );
}

export default Content;
