import React from "react";

interface User {
  login: string;
  name: string;
  public_repos: number;
}

interface UserInfoProps {
  user: User;
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <div>
      <p>Full Name: {user.name}</p>
      <p>Public Repos: {user.public_repos}</p>
    </div>
  );
};

export default UserInfo;
