import {IRole} from '@/shared/interfaces/IRole';
import {IModel} from '@/shared/interfaces/IModel';

export interface IProject extends IModel {
  description: string;
  customers: string[];
  technologies: string[];
  roles: IRole[];
  responsibilities: string[];
}
