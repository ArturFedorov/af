import {IProject, ITimestamp} from '@/shared/interfaces/IProject';
import {IRole} from '@/shared/interfaces/IRole';

export class DefaultValues {
  static roles = [
    { name: 'Team lead' },
    { name: 'Front–End developer' },
    { name: 'Designer' }
  ] as IRole[]

  static projects = [{
    name: 'Ice 9',
    roles: [DefaultValues.roles[1], DefaultValues.roles[2]] as IRole[],
    description: 'Blockchain based anomaly detection system.',
    startDate: {seconds: 1534021200} as ITimestamp
  },{
    name: 'Iot Solutions',
    roles: [DefaultValues.roles[0], DefaultValues.roles[1]] as IRole[],
    description: 'Blockchain based anomaly detection system.',
    startDate: {seconds: 1522962000} as ITimestamp
  }
  ] as IProject[];
}
