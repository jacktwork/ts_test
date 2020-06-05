import { IFilter } from './ifilter';
import { ServiceYear, ServiceType } from './data-types';

export class FilterSession implements IFilter {

  public filterId: string;

  constructor() {
    this.filterId = 'session';
  }

  apply(services: ServiceType[], year: ServiceYear) {
    // qa
    if (!services) {
      return [];
    }

    let foundPhoto = services.find(service => service === "Photography");
    let foundVideo = services.find(service => service === "VideoRecording");
    const foundSession = services.find(service => service === "WeddingSession");
    const foundCombo = services.find(service => service === "ComboPhotoVideo");

    if (foundSession && (foundPhoto || foundVideo || foundCombo)) {
      // turn off session
      services.map(service => {
        switch(service) {
          case 'WeddingSession':
            services = services.filter(service => service !== 'WeddingSession');
            break;
        }
      });

      if ((foundPhoto || foundCombo) && year === 2022) {
        // freebie
      } else {
        services.push('SessionBundle');
      }
    }

    return services;
  }
}
