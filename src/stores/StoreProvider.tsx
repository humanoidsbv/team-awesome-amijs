import React, { createContext, useState } from "react";

import * as Types from "../types/types";

interface StoreProviderProps {
  children;
}

interface StoreContextProps {
  timeEntries: [timeEntries: Types.TimeEntry[], setTimeEntries: Function];
  teamMembers: [teamMembers: Types.TeamMember[], setTeamMembers: Function];
}

export const StoreContext = createContext<StoreContextProps>(null);

export function StoreProvider({ children }: StoreProviderProps) {
  const store = {
    timeEntries: useState([]),
    teamMembers: useState([]),
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}
