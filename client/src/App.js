import logo from './logo.svg';
import './App.css';

import { useQuery, gql } from '@apollo/client';

// const GET_LOCATIONS = gql`
//   query GetLocations {
//     locations {
//       id
//       name
//       description
//       photo
//     }
//   }
// `;
// const GET_LOCATION_PHOTO = gql`
//   query Location($location: String!) {
//     location(location: $location) {
//       id
//       displayImage
//     }
//   }
// `;

// function DisplayLocations() {
//   const { loading, error, data } = useQuery(GET_LOCATIONS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return data.locations.map(({ id, name, description, photo }) => (
//     <div key={id}>
//       <h3>{name}</h3>
//       <img width="400" height="250" alt="location-reference" src={`${photo}`} />
//       <br />
//       <b>About this location:</b>
//       <p>{description}</p>
//       <br />
//     </div>
//   ));
// }

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;





 




function Dogs({ onDogSelected }) {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <select name='dog' onChange={onDogSelected}>
      {data.dogs.map((dog) => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
}


function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br/>
      {/* <DisplayLocations /> */}

      <Dogs/>
    </div>
  );
}

export default App;
