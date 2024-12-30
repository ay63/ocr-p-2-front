import {of} from "rxjs";


export class OlympicsServiceMock {

  loadInitialData() {
    return of([
      {
        "id": 1,
        "country": "Italy",
        "participations": [
          {
            "id": 1,
            "year": 2012,
            "city": "Londres",
            "medalsCount": 28,
            "athleteCount": 372
          },
          {
            "id": 2,
            "year": 2016,
            "city": "Rio de Janeiro",
            "medalsCount": 28,
            "athleteCount": 375
          },
          {
            "id": 3,
            "year": 2020,
            "city": "Tokyo",
            "medalsCount": 40,
            "athleteCount": 381
          }
        ]
      }],)
  }

  getOlympics () {
    return of([
      {
        "id": 1,
        "country": "Italy",
        "participations": [
          {
            "id": 1,
            "year": 2012,
            "city": "Londres",
            "medalsCount": 28,
            "athleteCount": 372
          },
          {
            "id": 2,
            "year": 2016,
            "city": "Rio de Janeiro",
            "medalsCount": 28,
            "athleteCount": 375
          },
          {
            "id": 3,
            "year": 2020,
            "city": "Tokyo",
            "medalsCount": 40,
            "athleteCount": 381
          }
        ]
      }],)
  }




}

