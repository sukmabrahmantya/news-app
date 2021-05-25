import { createActionTypes, createGenerateActions } from '../utils';

export const NEWS = createActionTypes('NEWS');
export const newsFns = createGenerateActions(NEWS);
export const NEWS_DETAIL = createActionTypes('NEWS_DETAIL');
export const newsDetailFns = createGenerateActions(NEWS_DETAIL);
