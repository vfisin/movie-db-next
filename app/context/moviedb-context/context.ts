"use client"
import React from "react";
import { createContext } from "react";
import initialState from "./initialState";
import { MoviesDBState } from "./types";

const MovieDBContext = createContext<{
  state: MoviesDBState;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export default MovieDBContext;
