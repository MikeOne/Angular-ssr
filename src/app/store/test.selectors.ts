import { createFeatureSelector, createSelector } from '@ngrx/store';


export const getTestFeature = createFeatureSelector<any>('test');

export const getTestState = createSelector(
    getTestFeature,
    (state) => state
);

export const getTestData = createSelector(
    getTestState,
    (state) => state && state.data
);

export const getMoreTestData = createSelector(
    getTestState,
    (state) => state && state.moredata
);
