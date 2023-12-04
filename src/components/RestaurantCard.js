import React from 'react';
import './RestaurantCard.css';

const ChefSection = ({ chef }) => (
    <div>
      <h3>Chef</h3>
      <p>{chef.name}</p>
      <p>{chef.bio}</p>
      <p>Signature Dish: {chef.signature_dish}</p>
    </div>
  );

const AwardsSection = ({ awards }) => (
  <div>
    <h3>Awards</h3>
    <ul>
      {awards.map((award, index) => (
        <li key={index}>
          {award.year} - {award.organization}: {award.award}
        </li>
      ))}
    </ul>
  </div>
);

const AmbianceSection = ({ ambiance }) => (
    <div>
      <h3>Ambiance</h3>
      <p>{ambiance.description}</p>
    </div>
  );

const SustainabilitySection = ({ initiatives }) => (
  <div>
    <h3>Sustainability Initiatives</h3>
    <ul>
      {initiatives.map((initiative, index) => (
        <li key={index}>
          {initiative.name}: {initiative.description}
        </li>
      ))}
    </ul>
  </div>
);

const EventsSection = ({ upcomingEvents }) => (
  <div>
    <h3>Upcoming Events</h3>
    <ul>
      {upcomingEvents.map((event, index) => (
        <li key={index}>
          {event.name} - Date: {event.date}, Description: {event.description}
        </li>
      ))}
    </ul>
  </div>
);

const OnlinePresenceSection = ({ onlinePresence }) => (
    <div>
      <h3>Online Presence</h3>
      <p>Website: <a href={onlinePresence.website} target="_blank" rel="noopener noreferrer">{onlinePresence.website}</a></p>
      <p>Facebook: <a href={onlinePresence.social_media.facebook} target="_blank" rel="noopener noreferrer">{onlinePresence.social_media.facebook}</a></p>
      <p>Instagram: <a href={onlinePresence.social_media.instagram} target="_blank" rel="noopener noreferrer">{onlinePresence.social_media.instagram}</a></p>
      <p>Twitter: <a href={onlinePresence.social_media.twitter} target="_blank" rel="noopener noreferrer">{onlinePresence.social_media.twitter}</a></p>
    </div>
  );

const MenuSection = ({ categories, seasonalMenu }) => (
  <div>
    <h3>Menu</h3>
    <div>
      {categories.map((category, index) => (
        <div key={index}>
          <h4>{category.name}</h4>
          <ul>
            {category.items.map((item, i) => (
              <li key={i}>
                {item.name} - {item.description}, Price: ${item.price}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div>
      <h4>{seasonalMenu.name}</h4>
      <ul>
        {seasonalMenu.items.map((item, i) => (
          <li key={i}>
            {item.name} - {item.description}, Price: ${item.price}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ReviewsSection = ({ reviews }) => (
  <div>
    <h3>Reviews</h3>
    <ul>
      {reviews.map((review, index) => (
        <li key={index}>
          {review.customer_name} - Rating: {review.rating}, Comment: {review.comment}
        </li>
      ))}
    </ul>
  </div>
);

const GoogleMap = ({ latitude, longitude }) => (
  <div>
    <h3>Location on Google Map</h3>
    <iframe
      title="Google Map"
      width="100%"
      height="300"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
      src={'https://maps.google.com/maps?q=${latitude},${longitude}&output=embed'}
      ></iframe>
  </div>
);

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <h2>{restaurant.name}</h2>
      <p>{restaurant.location.address}</p>
      <GoogleMap latitude={restaurant.location.latitude} longitude={restaurant.location.longitude} />
      <ChefSection chef={restaurant.chef} />
      <AwardsSection awards={restaurant.awards} />
      <AmbianceSection ambiance={restaurant.ambiance} />
      <SustainabilitySection initiatives={restaurant.sustainability.initiatives} />
      <EventsSection upcomingEvents={restaurant.events.upcoming_events} />
      <OnlinePresenceSection onlinePresence={restaurant.online_presence} />
      <MenuSection categories={restaurant.menu.categories} seasonalMenu={restaurant.menu.seasonal_menu} />
      <ReviewsSection reviews={restaurant.reviews} />
      
    </div>
  );
};

export default RestaurantCard;