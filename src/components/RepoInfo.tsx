import React from "react";

interface Repo {
  full_name: string;
  stargazers_count: number;
}

interface RepoInfoProps {
  repo: Repo;
}

const RepoInfo: React.FC<RepoInfoProps> = ({ repo }) => {
  return (
    <div>
      <p>Repo Name: {repo.full_name}</p>
      <p>Stars: {repo.stargazers_count}</p>
    </div>
  );
};

export default RepoInfo;
