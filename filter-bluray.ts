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
      services.map(service => {
        // turn off bluray
        switch (service) {
          case 'BlurayPackage':
            services = services.filter(service => service !== 'BlurayPackage');
            break;
        }
      });
    }

    return services;
  }
}
