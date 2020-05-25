import { createAction, props } from '@ngrx/store';

export const loadEuler = createAction(
  '[Euler] Load Euler'
);

export const loadEulerSuccess = createAction(
  '[Euler] Load Euler Success',
  props<{ data: any }>()
);

export const loadEulerFailure = createAction(
  '[Euler] Load Euler Failure',
  props<{ error: any }>()
);
