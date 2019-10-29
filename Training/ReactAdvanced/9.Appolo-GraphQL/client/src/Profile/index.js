import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
const GET_CURRENT_USER = gql`
  {
    viewer {
      login
      name
    }
  }
`;
const Profile = () => {
  const { loading, error, data } = useQuery(GET_CURRENT_USER);
  debugger;
  return (
    <div>
      <div>Profile</div>
    </div>
  );
};
export default Profile;
