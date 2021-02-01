import React from "react";
import { mount } from "enzyme";
import CountryCard from "./index";

const testTitle = "Name: Australia";
const testCapital = "capital: Canberra";
const testParagraph = " language: English native name: English, ";
const mockdata = {
  __typename: "Country",
  name: "Australia",
  nativeName: "Australia",
  capital: "Canberra",
  populationDensity: 3.135372432535312,
  area: 7692024,
  population: 24117360,
  _id: "303",
  flag: {
    __typename: "Flag",
    _id: "322",
    svgFile: "https://restcountries.eu/data/aus.svg",
  },
  officialLanguages: [
    {
      __typename: "Language",
      _id: "126",
      name: "English",
      nativeName: "English",
    },
  ],
};

let wrappedWithData = mount(<CountryCard {...mockdata} />);

describe("Title", () => {
  it("renders title correctly", () => {
    expect(wrappedWithData.find("h3").text()).toEqual(testTitle);
  });
  it("renders capital correctly", () => {
    expect(wrappedWithData.find("h5").text()).toEqual(testCapital);
  });
  it("renders languages correctly", () => {
    expect(wrappedWithData.find("p").text()).toEqual(testParagraph);
  });
});
