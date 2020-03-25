import {IProject} from '@/shared/interfaces/IProject';
import {IEducation} from '@/shared/interfaces/IEducation';

export interface IYear {
  year: string;
  id: string;
  projects: IProject[];
  educations: IEducation[];
}
