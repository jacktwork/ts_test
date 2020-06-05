import { IFilter } from './ifilter';
import { ServiceYear } from './data-types';
import { AppliedService } from './applied-service';

export class FilterSession implements IFilter {

  public filterId: string;

  constructor() {
    this.filterId = 'session';
  }

  apply(services: AppliedService[], year: ServiceYear) {
    // qa
    if (!services) {
      return [];
    }

    const foundPhoto = services.find(service => service.type === "Photography");
    const foundVideo = services.find(service => service.type === "VideoRecording");
    const foundSession = services.find(service => service.type === "WeddingSession");

    if (foundSession && (foundPhoto || foundVideo)) {
      // turn off session
      services.map(service => {
        switch(service.type) {
          case 'WeddingSession':
            service.active = false;
            break;
        }
      });

      if (foundPhoto && year === 2022) {
        // freebie
      } else {
        services.push(new AppliedService('SessionBundle'));
      }
    }

    return services;
  }
}
