import { ServiceType } from './data-types';

// note: this class is needed as a wrapper because
// active flag allows us to remove a service and 
// retain the information that it is in the list

export class AppliedService {
  type: ServiceType;
  active: boolean;

  constructor(type: ServiceType) {
    this.type = type;
    this.active = true;
  }
}
