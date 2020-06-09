import { IFilter } from './ifilter';
import { ServiceType } from './data-types';

export class FilterComboPV implements IFilter {

  public filterId: string;

  constructor() {
    this.filterId = 'combopv';
  }

  apply(services: ServiceType[]) {
    // qa
    if (!services) {
      return [];
    }

    const foundPhoto = services.find(service => service === "Photography");
    const foundVideo = services.find(service => service === "VideoRecording");

    if (foundPhoto && foundVideo) {
      // turn off photo and video
      services = services.filter(service => service !== 'Photography');
      services = services.filter(service => service !== 'VideoRecording');

      // add combination
      services.push('ComboPhotoVideo');
    }

    return services;
  }
}
