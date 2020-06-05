import { ServiceYear, ServiceType } from './data-types';
import { IFilter } from './ifilter';
import { FilterComboPV } from './filter-combopv';
import { FilterBluRay } from './filter-bluray';
import { FilterSession } from './filter-session';
import { FilterEvent } from './filter-event';

export const filtersPriceStandard = () => {
  // standard configuration
  // customer may wish to override 
  const list: IFilter[] = [];
  list.push(new FilterComboPV());
  list.push(new FilterBluRay());
  list.push(new FilterSession());
  list.push(new FilterEvent());
  return list;
};

export const filtersSelectStandard = () => {
  // standard configuration
  // customer may wish to override 
  const list: IFilter[] = [];
  list.push(new FilterBluRay());
  list.push(new FilterEvent());
  return list;
};

export const GetPrice = (selectedService: ServiceType, selectedYear: ServiceYear) => {
  return prices()[selectedService][selectedYear.toString()];
};

export const prices = () => {
  const prices = {};
  prices['Photography'] = {
    "2020": 1700,
    "2021": 1800,
    "2022": 1900
  };
  prices['ComboPhotoVideo'] = {
    "2020": 2200,
    "2021": 2300,
    "2022": 2500
  };
  prices['VideoRecording'] = {
    "2020": 1700,
    "2021": 1800,
    "2022": 1900
  };
  prices['BlurayPackage'] = {
    "2020": 300,
    "2021": 300,
    "2022": 300
  };
  prices['TwoDayEvent'] = {
    "2020": 400,
    "2021": 400,
    "2022": 400
  };
  prices['WeddingSession'] = {
    "2020": 600,
    "2021": 600,
    "2022": 600
  };
  prices['SessionBundle'] = {
    "2020": 300,
    "2021": 300,
    "2022": 300
  };
  return prices;
};
