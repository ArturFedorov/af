import {IProject} from '@/shared/interfaces/IProject';

export interface IYear {
  year: string;
  id: string;
  projects: IProject[];
}
