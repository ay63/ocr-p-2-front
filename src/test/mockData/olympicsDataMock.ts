import {Olympic} from "../../app/core/models/interfaces/Olympic";

const olympicsMockData: Olympic[] = [{
  id: 1,
  country: 'Country 1',
  participations: [{id: 1, year: 2000, city: 'paris', medalsCount: 2, athleteCount: 3}]
}, {
  id: 2,
  country: 'Country 2',
  participations: [{id: 1, year: 2000, city: 'paris', medalsCount: 2, athleteCount: 3}]
}
];

export default olympicsMockData;
