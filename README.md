# React Travel Trucks

A web application built with React that showcases travel trucks (campers)
available for rental. The application includes filters, a detailed camper list,
and pagination to provide a smooth user experience for browsing available
vehicles.

## Features

- <b>Filtering System</b>: Allows users to filter campers based on location,
  equipment, and vehicle type.
- <b>Pagination</b>: Dynamically loads more campers as users click the "Load
  more" button.
- <b>Detailed Camper Info</b>: Each camper includes detailed specifications such
  as location, form, transmission, and available facilities.
- <b>Booking System</b>: Users can book a camper by selecting a date and filling
  in contact information.

## Tech Stack

- <b>React</b>: For building the UI components.
- <b>React Router</b>: For routing between pages.
- <b>Redux Toolkit</b>: For managing the global state, including filters and
  campers data.
- <b>Redux persist</b>: For persisting the global state (favorites campers).
- <b>Formik & Yup</b>: For handling forms and validation in the booking section.
- <b>React DatePicker</b>: For date selection with custom styles.
- <b>React Hot Toast</b>: For displaying toast notifications.
- <b>CSS Modules</b>: For styling components with scoped CSS.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Sysqwerty/react_travel_trucks.git
```

2. Navigate to the project folder:

```bash
cd react_travel_trucks
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the project in the browser following the suggested URL

## Usage

1. <b>Filtering Campers</b>: Use the filter options to refine your search based
   on location, equipment, or vehicle type.
2. <b>Pagination</b>: Load more campers by clicking the "Load more" button
3. <b>View Camper Details</b>: View detailed information about the camper.
4. <b>Booking Camper</b>: Select a camper, choose a booking date, and fill in
   your details to reserve a camper.
5. <b>Favorite Campers</b>: Add/remove campers from your favorites.
6. <b>Favorites Page</b>: View your favorite campers.

## License

This project is licensed under the MIT License.
