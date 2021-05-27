import create from "zustand";

import * as Types from "../types/types";

type State = {
  timeEntries: Types.TimeEntry[];
  setTimeEntries: (input: Types.TimeEntry[]) => void;
  teamMembers: Types.TeamMember[];
  setTeamMembers: (input: Types.TeamMember[]) => void;
};

export const useStore = create<State>((set) => ({
  timeEntries: [],
  setTimeEntries: (input) => set({ timeEntries: input }),

  teamMembers: [],
  setTeamMembers: (input) => set({ teamMembers: input }),
}));
