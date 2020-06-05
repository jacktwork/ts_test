import { ServiceYear, ServiceType } from './data-types';
import { GetPrice, filtersPriceStandard, filtersSelectStandard } from './data-access';

// note: in angular this would be a service
// at init it would get a price list from the backend
// not sure if this test is a front end project or backend project?
// so we just named this business-logic here

export class BusinessLogic {
  
  static determineBasePrice(selectedServices: ServiceType[], selectedYear: ServiceYear) {
    // tally price
    let basePrice: number = 0;
    for (const selectedService of selectedServices) {
      basePrice += GetPrice(selectedService, selectedYear);
    }
    return basePrice;
  }

  static determineFinalPrice(selectedServices: ServiceType[], selectedYear: ServiceYear) {
    // apply predicates
    filtersPriceStandard().forEach(filter => selectedServices = filter.apply(selectedServices, selectedYear));

    // tally price
    let finalPrice: number = 0;
    selectedServices.forEach(service => {
      finalPrice += GetPrice(service, selectedYear); 
    });
    return finalPrice;
  }
  
  static determineSelectedServices(selectedServices: ServiceType[], action: { type: "Select" | "Deselect"; service: ServiceType }) {
    // select/deselect
    switch(action.type) {
      case "Select":
        if (selectedServices.indexOf(action.service) === -1) {
          selectedServices.push(action.service);
        }
        break;
      case "Deselect":
        selectedServices = selectedServices.filter(service => service !== action.service);
        break;
    }

    // apply predicates
    filtersSelectStandard().forEach(filter => selectedServices = filter.apply(selectedServices));

    return selectedServices;
  }
}

