import { configureStore, AnyAction } from "@reduxjs/toolkit";
import projectData from "./projectData";

interface State {
  projects: Array<object>;
}

const store = configureStore({
  reducer: {
    projects: (state: State["projects"] = projectData.projects, action: AnyAction) => state,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;