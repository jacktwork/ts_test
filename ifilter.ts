import { ServiceType, ServiceYear } from './data-types';

export interface IFilter {
  apply(services: ServiceType[], year?: ServiceYear): ServiceType[];
}

