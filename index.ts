import { ServiceYear, ServiceType } from './data-types';
import { BusinessLogic } from './business-logic';

export const updateSelectedServices = (
    previouslySelectedServices: ServiceType[],
    action: { type: "Select" | "Deselect"; service: ServiceType }
) => BusinessLogic.determineSelectedServices(previouslySelectedServices, action);

export const calculatePrice = (selectedServices: ServiceType[], selectedYear: ServiceYear) => (
    {
        basePrice: BusinessLogic.determineBasePrice(selectedServices, selectedYear), 
        finalPrice: BusinessLogic.determineFinalPrice(selectedServices, selectedYear)
    }
);
