import { createContextId } from "@builder.io/qwik";
import { AuthContextType } from "~/types/types";

export const AuthContext = createContextId<AuthContextType>('auth-context');

