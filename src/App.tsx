import "./styles.css";
import { UserCard } from "./components/UseCard";
import { userAllUsers } from "./hooks/useAllUsers";
import axios from "axios";
import { User } from "./types/api/user";
import { useState } from "react";
import { UserProfile } from "./types/userPropfile";

export default function App() {
  const { getUsers, userProfile, loading, error } = userAllUsers();

  const onClickFetchdate = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchdate}>データ取得</button>
      <br />
      {error ? (
        <p>エラー</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfile.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
