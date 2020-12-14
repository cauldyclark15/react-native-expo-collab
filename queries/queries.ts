import gql from "graphql-tag";

export const VIEWER = gql`
  query viewer {
    viewer {
      id
      name
      repositories(last: 10) {
        nodes {
          name
        }
      }
    }
  }
`;
