const { default: Business } = require("../components/Business/Business");

const apiKey = 'jMFU0T878TUUyTtp6S6x8nERzBZc83yz_ggOTlpkUljSUbiJIkvMpW7WMQiP1KnP9OBHKelV_Fc4iTQjP5P8iX1KMmPez8jvrCCUuI9YYC1gmmBMMJdC7fjlr_-WX3Yx';
const Yelp = {

    search: function(term, location, sortBy) {
        
        const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;

        return fetch(url , {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count 
                    }
                });
            }
        });

    }

};

export default Yelp;