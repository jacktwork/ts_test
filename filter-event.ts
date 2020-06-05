import { IFilter } from './ifilter';
import { ServiceType } from './data-types';

export class FilterEvent implements IFilter {

  public filterId: string;

  constructor() {
    this.filterId = 'event';
  }

  apply(services: ServiceType[]) {
    // qa
    if (!services) {
      return [];
    }

    const foundPhoto = services.find(service => service === "Photography");
    const foundVideo = services.find(service => service === "VideoRecording");
    if (!foundPhoto && !foundVideo) {
      // turn off twoday
      services.map(service => {
        switch (service) {
          case 'TwoDayEvent':
            services = services.filter(service => service !== 'TwoDayEvent');
            break;
        }
      });
    }

    return services;
  }
}
