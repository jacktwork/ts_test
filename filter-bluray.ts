import { IFilter } from './ifilter';
import { AppliedService } from '../applied-service';

export class FilterBluRay implements IFilter {

  public filterId: string;

  constructor() {
    this.filterId = 'bluray';
  }

  apply(services: AppliedService[]) {
    // qa
    if (!services) {
      return [];
    }

    const foundVideo = services.find(service => service.type === "VideoRecording");
    if (!foundVideo) {
      services.map(service => {
        // turn off bluray
        switch (service.type) {
          case 'BlurayPackage':
            service.active = false;
            break;
        }
      });
    }

    return services;
  }
}
