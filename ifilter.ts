import { ServiceYear } from '../data-types';
import { AppliedService } from '../applied-service';

export interface IFilter {
  apply(services: AppliedService[], year?: ServiceYear): AppliedService[];
}

