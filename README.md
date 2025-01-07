# OlympicGamesStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

Don't forget to install your node_modules before starting (`npm install`).

## Development server

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Build documentation
- Run `npm run doc:build` to build doc
- Run `npm run doc:build:run` to build doc and run server
- Run `npm run doc:run` to run server

## Project Structure

### `components` folder
This folder contains all reusable components:
- **`CountriesChart`**: A circular chart component.
- **`CountryDetailChart`**: A line chart component.
- **`InfoDetailChart`**: A detail section component.
- **`Header`**: A header and navigation bar component.
- **`Loader`**: A basic loader component.

### `pages` folder
This folder contains components used for routing:
- **`DashboardCountries`**: The main page component.
- **`DashboardCountryDetail`**: The detail page component.

### `core` folder
This folder contains the business logic, including the `services`, `types`, and `models` folders.

### `services`
This folder contains utility services:
- **`ChartData`**: Handles data processing for charts.
- **`ChartFormat`**: Formats data for the graphics library.
- **`Loader`**: Manages the logic for displaying loaders.
- **`Olympic`**: Simulates API calls for Olympic data.
- **`UnsubscribeObservable`**: Manages the closure of observables.

### `models`
This folder contains interfaces and types used across the application.

#### `interfaces`
- **`Olympic`**: Defines the structure of HTTP responses.
- **`OnResize`**: Used to adjust chart sizes dynamically.
- **`Participations`**: Defines the structure for participation data.

#### `types`
- **`CountryAllChartFormat`**: Defines the data format for the `CountriesChart` component.
- **`CountryDetailChartFormat`**: Defines the data format for the `CountryDetailChart` component.


# Libraries

- [ngx-toastr](https://www.npmjs.com/package/ngx-toastr)
- [ngx-charts](https://swimlane.gitbook.io/ngx-charts)
- [compodoc](https://www.npmjs.com/package/@compodoc/compodoc)
