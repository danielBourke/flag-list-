import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CountryCard from "../CountryCard";
import InfiniteScroll from "react-infinite-scroller";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: "60vw",
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      flexWrap: "wrap",
      [theme.breakpoints.up('lg')]: {
        maxWidth: "40vw",
      },
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  })
);

type ListProps = {
  data: [];
  getNextItems: () => {};
  fetchMore: () => {};
  loading: false;
};

export default function CountryList({
  data,
  loading,
  getNextItems,
  fetchMore,
}: ListProps) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} justify="center" spacing={2}>
      {data && data.length !== 0 && (
        <InfiniteScroll
          className={classes.root}
          pageStart={0}
          loadMore={getNextItems}
          hasMore={!loading }
          initialLoad={false}
        >
          {data &&
            data.map((country, i) => {
     
              return <CountryCard key={i} {...country} />;
            })}
        </InfiniteScroll>
      )}
    </Grid>
  );
}
