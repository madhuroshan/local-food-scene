"use client";

import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import React, { useEffect, useState } from "react";

export default function Home() {
  const createUser = useMutation(api.users.createUser);
  const users = useQuery(api.users.getUsers);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const createUserAction = async (e: React.FormEvent) => {
    e.preventDefault();
    await createUser({ name, email, username });
    setName("");
    setEmail("");
    setUsername("");
  };

  return (
    <div className="text-3xl">
      <form onSubmit={createUserAction}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h1>Users</h1>
        <ul>
          {users?.map((user: any) => (
            <li>
              {user.name} - {user.email} - {user.username}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
