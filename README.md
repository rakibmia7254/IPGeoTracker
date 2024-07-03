IPGeoTracker
==============

A simple IP Tracker API built with Elysia.js and BUN that provides geolocation information for a given IP address using a custom SQLite dataset.

Requirements
------------

*   BUN
*   Elysia.js

Installation
------------

1.  **Clone the repository:**
    
        git clone https://github.com/rakibmia72/IPGeoTracker.git && cd IPGeoTracker
    
2.  **Install dependencies:**
    
        bun  install
 
   
Usage
-----

1.  **Start the server:**
    
        bun run index.js
    
2.  **Access the API:**
    
    *   The server runs on `http://localhost:3000`.
    *   Use the `/` endpoint to get geolocation data.

### Example Request:

    curl http://localhost:3000/1.1.1.1
   or 
   
	 curl http://localhost:3000/me

### Example Response:

    {
      "ip": "1.1.1.1",
      "info": {
        "registry": "apnic",
        "assigned": "1313020800",
        "country_code": "AU",
        "country": "Australia",
        "region": "AUS"
      }
    }

License
-------

This project is licensed under the MIT License.
