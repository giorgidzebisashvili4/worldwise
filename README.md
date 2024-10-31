# WorldWise

**WorldWise** is a web application that enables users to log cities they have visited, visualize these locations on an interactive map, and categorize them by region or country. This app combines React with powerful mapping and performance-enhancing tools to provide a smooth and responsive experience.

## Features

- **City Log & Categorization**: Allows users to save cities they have visited, categorizing them by country or region for easy access.
- **Interactive Map Display**: Uses Leaflet and React Leaflet for an intuitive mapping experience, displaying visited locations visually.
- **Performance Optimization**: Implemented `useMemo`, `useCallback`, and memoization to optimize performance in rendering components.
- **Seamless Navigation**: Utilizes React Router for efficient and fluid navigation across different app sections.

## Built With

- **React**: Core framework for building the user interface.
- **React Router**: Facilitates navigation between pages.
- **Context API**: Used for state management across components.
- **Leaflet & React Leaflet**: For rendering the map and mapping functionalities.
- **React Datepicker**: For easy date selection and filtering.
- **JSON Server**: Serves as a mock backend for storing city data.

## open and use

click to see [Live Demo](https://worldwise-gdz.netlify.app/)

If you downloaded and want to run on pc:

```bash
npm install
```

```bash
npm run server
```

```bash
npm run dev
```

## Folder Structure

- /src: Contains main application code, including components and pages.
- /data: Holds the cities.json file, which JSON Server serves as a mock backend.
