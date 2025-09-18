import { createContextId } from "@builder.io/qwik";
import { AuthContextType } from "~/types/types";

export const AuthContext = createContextId<AuthContextType>('auth-context');

// src/context/auth.ts
// import { createContextId } from '@builder.io/qwik';
// import { type Signal, useStore } from '@builder.io/qwik';

// export const AuthContext = createContextId<Signal<{ loggedIn: boolean }>>('AuthContext');
