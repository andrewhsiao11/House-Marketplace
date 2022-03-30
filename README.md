# House Marketplace

Find and list houses for sale or for rent. Deployed at [Vercel](https://house-marketplace-six-mu.vercel.app/).

## Things I Implemented :
* Firebase backend database.
* CRUD with database
* Firebase Google Authentication.
* Google geocoding
* Leaflet with React
* React Router

## Usage

### Geolocation

The listings use Google geocoding to get the coords from the address field. You need to either rename .env.example to .env and add your Google Geocode API key OR in the **CreateListing.jsx** file you can set **geolocationEnabled** to "false" and it will add a lat/lng field to the form.

### Run

```bash
npm start
```
