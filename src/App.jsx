import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostList } from "./redux/post.jsx";

const App = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.postList);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(fetchPostList());
        }}
      >
        Buscar posts
      </button>

      {postList.status === "inativo" ? (
        <div>API status: {postList.status}</div>
      ) : null}

      {postList.status === "carregando" ? (
        <div>API status: {postList.status}</div>
      ) : null}

      {postList.status === "sucesso" ? (
        <div>API status: {postList.status}</div>
      ) : null}

      {postList.status === "erro" ? (
        <div>API status: {postList.status}</div>
      ) : null}

      {postList.status !== "carregando" &&
        postList.data.length &&
        postList.data.map((post, key) => (
          <div key={key}>
            <div>
              <span>Título: {post.title}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default App;
