// @flow

export type LocationType = {
  latitude?: string,
  localityId?: number,
  subLocalityName?: string,
  subwayIds?: Array<number>,
  countryName?: string,
  longitude?: string,
  postalCode?: number,
  countryId?: number,
  house?: number,
  localityName?: string,
  street?: string,
  regionId?: number,
  regionName?: string,
};

export type ImagesType = {
  id: string,
  isPublic: boolean,
};

export type RangeType = {
  to: number,
  from: number
}

export type StatisticsType = {
  resalePropertiesCount?: number,
  price?: {
    from: {
      usd: number,
      eur: number,
      rub: number,
    },
    to: {
      usd: number,
      eur: number,
      rub: number,
    },
  },
  totalResaleArea?: {
    from: number,
    to: number,
  },
  resalePrice?: {
    from: {
      usd: number,
      eur: number,
      rub: number,
    },
    to: {
      usd: number,
      eur: number,
      rub: number,
    },
  },
  propertiesCount?: number,
  totalPrimaryArea?: {
    from: number,
    to: number,
  },
  primaryPrice?: {
    from: {
      usd: number,
      eur: number,
      rub: number,
    },
    to: {
      usd: number,
      eur: number,
      rub: number,
    },
  },
  primaryPropertiesCount?: number,
  totalArea?: {
    from: number,
    to: number,
  },
};

export type DetailsType = {
  architect?: string,
  developer?: string,
  startYear?: number,
  startQuarter?: string,
  commissioningYear?: number,
  commissioningQuarter?: string,
  ceilHeight?: {
    from: number,
    to: number,
  },
  parkings?: number,
  maintenanceCosts?: number,
  propertyKind?: string,
  security?: string,
  undergroundGarages?: string,
  constructionKind?: string,
};

export type AmenitiesType = Array<string>;

export type ComplexType = {
  commissioningYear: number,
  adjacentTerritory: {
    area: number,
    isAccessOpen: boolean,
    isAllowedCars: boolean,
    isGreeneryPlanted: boolean,
    playgrounds: number,
  },
  name: string,
  updatedAt: string,
  location: LocationType,
  state: string,
  units: number,
  amenities: AmenitiesType,
  details: DetailsType,
  statistics: StatisticsType,
  keysIssueDate: string,
  purchaseTimeConditions: {
    agreementPreparation: number,
    oralReservation: number,
  },
  commissioningQuarter: number,
  fullDescription: string,
  shortDescription: string,
  linkedContactIds: Array<string>,
  responsibleUser: {
    id: number,
    departmentId: number,
  },
  createdByUserId: number,
  id: number,
  updatedByUserId: number,
  createdAt: string,
  images: ImagesType,
  accreditors: Array<number>,
};
