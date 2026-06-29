"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { hydrate } from "./slices/authSlice";

const KEY = "accutrack-auth";

/** Restores the logged-in user from localStorage on mount and persists changes. */
export function AuthPersistence() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((s) => s.auth);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY);
      dispatch(hydrate(raw ? JSON.parse(raw) : null));
    } catch {
      dispatch(hydrate(null));
    }
  }, [dispatch]);

  useEffect(() => {
    if (!auth.hydrated) return;
    try {
      if (auth.isAuthenticated && auth.user) {
        window.localStorage.setItem(KEY, JSON.stringify(auth.user));
      } else {
        window.localStorage.removeItem(KEY);
      }
    } catch {
      /* ignore */
    }
  }, [auth.hydrated, auth.isAuthenticated, auth.user]);

  return null;
}
