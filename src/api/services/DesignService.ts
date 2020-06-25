import {IDesignProject} from '@/shared/interfaces/IDesignProject';
import uniqueId from '../../components/common/filter/uniqueId.filter';

export class DesignService {
  static getDesignProjects(): IDesignProject[] {
    return [
      { id: uniqueId('cheeta') ,name: 'cheeta', class: 'cheeta', topics: ['logo', 'landing', 'identity']},
      { id: uniqueId('feix'), name: 'feix', class: 'feix', topics: ['logo', 'landing', 'identity']},
      { id: uniqueId('one2nd'), name: 'one2nd', class: 'one2nd', topics: ['logo', 'landing', 'identity']},
      { id: uniqueId('ice9'), name: 'ice9',class: 'ice', topics: ['ux', 'ui']},
      { id: uniqueId('elena'), name: 'elena krasnenko', class: 'elena-krasnenko', topics: ['logo', 'type', 'landing']}
    ];
  }

  static getDesignProjectByName(name: string): IDesignProject | undefined {
    const foundProjects = this.getDesignProjects().filter((project: IDesignProject) =>
      project.name === name);
    return foundProjects.length ? foundProjects[0] : undefined;
  }
}
