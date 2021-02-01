import React from "react";
import { gql, useQuery } from "@apollo/client";
import CountryList from "../Components/CountryList";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 90,
    },
  })
);

const REGIONS = gql`
  query($offset: Int) {
    Country(first: 10, offset: $offset) {
      name
      nativeName
      capital
      populationDensity
      area
      population

      _id
      flag {
        _id
        svgFile
      }
      officialLanguages {
        _id
        name
        nativeName
      }
    }
  }
`;

const Dashboard = () => {
  const classes = useStyles();
  const { loading, error, data, fetchMore } = useQuery(REGIONS, {
    variables: {
      offset: 10,
      limit: 10,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const getNextItems = () => {
    const currentLength = data.Country.length + 10;
    fetchMore({
      variables: {
        offset: currentLength,
        limit: 10,
      },
    });
  };
  return (
    <div className={classes.root}>
      {fetchMore && (
        <CountryList
          loading={loading}
          fetchMore={fetchMore}
          getNextItems={getNextItems}
          data={data.Country}
        />
      )}
    </div>
  );
};

export default Dashboard;
