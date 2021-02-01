import React, { ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  media: {
    height: 140,
  },
});

interface FlagProps {
  svgFile: string;
}

interface OficialLanguages {
  name: string;
  nativeName: string;
}

type Props = {
  children: ReactNode;
  name: string;
  capital: string;
  _id: string;
  nativeName: string;
  population: string;
  flag: FlagProps;
  officialLanguages: OficialLanguages[];
};
const CountryCard = (props: Props): JSX.Element => {
  const classes = useStyles();
  const { officialLanguages, population, capital, _id } = props;


  return (
    <Card  key={_id} className={classes.root}>
 
        <CardMedia
          className={classes.media}
          image={props.flag.svgFile}
          title="Contemplative Reptile"
        />
        <CardContent>
          <h3>
            Name: {props.name}
          </h3>
          <h4>
            Native name: {props.nativeName}
          </h4>
          <h4 >
            population: {population}
          </h4>
          <h5>
            capital: {capital}
          </h5>
        

          <p>
            {officialLanguages.map((item, i) => {
              if (i < 5) {
                return (<span key={i}> {`language: ${item.name} native name: ${item.nativeName}, `}</span>);
              }else{return <span key={i}></span>}
            })}
          </p>
        </CardContent>
  
    </Card>
  );
};

export default CountryCard;
