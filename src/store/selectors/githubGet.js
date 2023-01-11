import { createSelector } from "@reduxjs/toolkit";

export const selectGithubGetStore = (store) => store.githubGet;

export const dataSelector = createSelector(
  selectGithubGetStore,
  (githubGet) => githubGet.data
);

export const loadingSelector = createSelector(
  selectGithubGetStore,
  (githubGet) => githubGet.loadingSelector
);

export const errorSelector = createSelector(
  selectGithubGetStore,
  (githubGet) => githubGet.errorSelector
);
