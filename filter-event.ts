import { IFilter } from './ifilter';
import { AppliedService } from '../applied-service';

export class FilterEvent implements IFilter {

  public filterId: string;

  constructor() {
    this.filterId = 'event';
  }

  apply(services: AppliedService[]) {
    // qa
    if (!services) {
      return [];
    }

    const foundPhoto = services.find(service => service.type === "Photography");
    const foundVideo = services.find(service => service.type === "VideoRecording");
    if (!foundPhoto && !foundVideo) {
      // turn off twoday
      services.map(service => {
        switch (service.type) {
          case 'TwoDayEvent':
            service.active = false;
            break;
        }
      });
    }

    return services;
  }
}
