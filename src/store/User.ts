import { create } from "zustand";

// src/types/user.d.ts
interface User {
  name: string | null;
  email: string | null;
}

export interface IUser {
  user: User;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
}

export const useUser = create<IUser>((set) => ({
  user: {
    name: null,
    email: null,
  },
  setName: (name) => set((state) => ({ user: { ...state.user, name } })),
  setEmail: (email) => set((state) => ({ user: { ...state.user, email } })),
}));
