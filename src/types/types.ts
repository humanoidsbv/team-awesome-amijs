export interface TimeEntry {
  client: string;
  id: number;
  activity: string;
  startTime: string | Date;
  endTime: string | Date;
}

export interface TeamMember {
  firstName: string;
  lastName: string;
  jobFunction: string;
  employer: string;
  startingDate: string | Date;
  bio: string;
  address: string;
  zipCode: string;
  city: string;
  email: string;
  id: number;
}
