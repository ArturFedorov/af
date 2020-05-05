import {IRole} from '@/shared/interfaces/IRole';
import {IModel} from '@/shared/interfaces/IModel';

export interface ITimestamp {
  seconds: number
}

export interface IProject extends IModel {
  name: string;
  description: string;
  roles: IRole[];
  startDate: ITimestamp;
  endDate: ITimestamp;
}
