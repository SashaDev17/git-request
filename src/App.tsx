import React, { useState } from "react";

import FormComponent from "./components/FormComponent";
import UserInfo from "./components/UserInfo";
import RepoInfo from "./components/RepoInfo";
import ErrorMessage from "./components/ErrorMessage";

interface User {
  login: string;
  name: string;
  public_repos: number;
}

interface Repo {
  full_name: string;
  stargazers_count: number;
}

const App: React.FC = () => {
  const [result, setResult] = useState<User | Repo | null>(null);
  const [type, setType] = useState<"user" | "repo">("user");
  const [error, setError] = useState<string | null>(null);

  const handleFetch = async (nickname: string, type: "user" | "repo") => {
    const url =
      type === "user"
        ? `https://api.github.com/users/${nickname}`
        : `https://api.github.com/repos/${nickname}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Not Found");
      }
      const data = await response.json();
      setResult(data);
      setError(null);
    } catch (error) {
      setResult(null);
      setError("Пользователь или репозиторий не найден.");
    }
  };

  const handleTypeChange = (newType: "user" | "repo") => {
    setType(newType);
    setResult(null);
    setError(null);
  };

  return (
    <div className="App">
      <div className="form">
        <FormComponent
          onFetch={handleFetch}
          setType={handleTypeChange}
          type={type}
        />
      </div>

      <div className="info">
        {error && <ErrorMessage message={error} />}
        {!error && !result && (
          <p>
            Введите {type === "user" ? "пользователя" : "название репозитория"}.
          </p>
        )}
        {result && type === "user" && <UserInfo user={result as User} />}
        {result && type === "repo" && <RepoInfo repo={result as Repo} />}
      </div>
    </div>
  );
};

export default App;
