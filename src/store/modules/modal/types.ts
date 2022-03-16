export type TCurrentModalState = 'add' | 'edit' | 'delete' | null;

export interface ICurrentModalAction {
  payload: TCurrentModalState;
}
