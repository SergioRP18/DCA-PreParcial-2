export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
    tasks: [];
};

export enum Actions {
    "ADD_TASK" = "ADD_TASK",
    "REMOVE_TASK" = "REMOVE_TASK",
    "TOGGLE_TASK" = "TOGGLE_TASK",
}
