import { IFilter } from './ifilter';
import { AppliedService } from './applied-service';

export class FilterComboPV implements IFilter {

  public filterId: string;

  constructor() {
    this.filterId = 'combopv';
  }

  apply(services: AppliedService[]) {
    // qa
    if (!services) {
      return [];
    }

    const foundPhoto = services.find(service => service.type === "Photography");
    const foundVideo = services.find(service => service.type === "VideoRecording");

    if (foundPhoto && foundVideo) {
      // turn off photo and video
      services.map(service => {
        switch (service.type) {
          case 'Photography':
          case 'VideoRecording':
            service.active = false;
            break;
        }
      });

      // add combination
      services.push(new AppliedService('ComboPhotoVideo'));
    }

    return services;
  }
}
