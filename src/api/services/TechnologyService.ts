import {db} from '@/api/db';
import {Collections} from '@/api/Collections';

export class TechnologyService {
  static getAllTechnologies() {
    return db.collection(Collections.TECHNOLOGIES).orderBy('rating', 'desc');
  }
}
