"use client"
import React from "react";
import { useReducer } from "react";
import moviesReducer from "../reducers/reducer";
import initialState from "./initialState";
import MovieDBContext from "./context";

type Props = {
  children: React.ReactNode;
};

export function MovieDBDataProvider({ children }: Props) {
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  return (
    <MovieDBContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieDBContext.Provider>
  );
}
