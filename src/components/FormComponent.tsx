import React, { useState } from "react";

interface FormProps {
  onFetch: (nickname: string, type: "user" | "repo") => void;
  setType: (type: "user" | "repo") => void;
  type: "user" | "repo";
}

const FormComponent: React.FC<FormProps> = ({ onFetch, setType, type }) => {
  const [nickname, setNickname] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onFetch(nickname, type);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder={
          type === "user" ? "Введите пользователя" : "Введите репозиторий."
        }
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value as "user" | "repo")}
      >
        <option value="user">Пользователь</option>
        <option value="repo">Репозиторий</option>
      </select>
      <button type="submit">Подтвердить</button>
    </form>
  );
};

export default FormComponent;
