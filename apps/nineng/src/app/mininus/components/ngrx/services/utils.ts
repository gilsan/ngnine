import { FCourse } from '../model/course-model';

export function convertSnaps<T>(snaps) {

    return <T[]>  snaps.map( snap =>  {                     
        return {
          idx: snap.payload.doc.id,
          ...snap.payload.doc.data() as FCourse
        };
     })

}