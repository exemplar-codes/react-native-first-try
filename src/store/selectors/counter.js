import { createSelector } from "@reduxjs/toolkit";

export const selectCounterStore = (store) => store.counter;

export const countSelector = createSelector(
  selectCounterStore,
  (count) => count.count
);
