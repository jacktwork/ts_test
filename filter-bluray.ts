import { IFilter } from './ifilter';
import { ServiceType } from './data-types';

export class FilterBluRay implements IFilter {

  public filterId: string;

  constructor() {
    this.filterId = 'bluray';
  }

  apply(services: ServiceType[]) {
    // qa
    if (!services) {
      return [];
    }

    const foundVideo = services.find(service => service === "VideoRecording");
    if (!foundVideo) {
      // turn off bluray
      services = services.filter(service => service !== 'BlurayPackage');
    }

    return services;
  }
}
