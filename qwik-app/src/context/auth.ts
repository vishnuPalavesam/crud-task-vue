import { createContextId } from "@builder.io/qwik";
import { type Signal } from "@builder.io/qwik";

export interface AuthContextType {
  loggedIn: Signal<string>;
}

export const AuthContext = createContextId<AuthContextType>( "false");

// src/context/auth.ts
// import { createContextId } from '@builder.io/qwik';
// import { type Signal, useStore } from '@builder.io/qwik';

// export const AuthContext = createContextId<Signal<{ loggedIn: boolean }>>('AuthContext');
