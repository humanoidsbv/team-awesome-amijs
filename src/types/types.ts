export interface TimeEntry {
  client: string;
  id: number;
  activity: string;
  startTime: string | Date;
  endTime: string | Date;
}
