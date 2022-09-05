export type Todo = {
  id: number;
  name: string;
};

export interface TodoSliceState {
  items: Todo[];
}
