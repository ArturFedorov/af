import {db} from '@/api/db';
import {Collections} from '@/api/Collections';

export class ProjectService {
  static getAllProjects(){
    return db.collection(Collections.PROJECTS).orderBy('startDate', 'desc');
  }

  static getProjectById(id: string) {
    return db.collection(Collections.PROJECTS).doc(id).get();
  }
}
