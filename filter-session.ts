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

    const foundSession = services.find(service => service === "WeddingSession");

    if (foundSession) {
      const foundCombo = services.find(service => service === "ComboPhotoVideo");
      const foundPhoto = services.find(service => service === "Photography");
      const foundVideo = services.find(service => service === "VideoRecording");
      if (foundPhoto || foundVideo || foundCombo) {
        // turn off session
        services = services.filter(service => service !== 'WeddingSession');

        if ((foundPhoto || foundCombo) && year === 2022) {
          // freebie
        } else {
          services.push('SessionBundle');
        }
      }
    }

    return services;
  }
}
