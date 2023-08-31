import React, { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { MovieInfoSection } from "./components/MovieInfoSection";
import { MovieInfoCollection } from "./components/MovieInfoCollection";
import { Footer } from "../../components/Footer";

export const MovieDetailsPage = ({
  handleSignState,
  handleLoginState,
  signedPerson,
  handlelogout,
  getTheatreData,
  locationData,
  userLocation,
  handleLocationSelection,
  movieDetailsId,
  currentMovieDetails,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [movieDetailsId]);

  return (
    <>
      <Navbar
        signedPerson={signedPerson}
        pageName="movieDetails"
        handleSignState={handleSignState}
        handleLoginState={handleLoginState}
        handlelogout={handlelogout}
      />
      <MovieInfoSection
        getTheatreData={getTheatreData}
        locationData={locationData}
        userLocation={userLocation}
        handleLocationSelection={handleLocationSelection}
        movieDetailsId={movieDetailsId}
        signedPerson={signedPerson}
        handleLoginState={handleLoginState}
      />
      <MovieInfoCollection
        currentMovieDetails={currentMovieDetails}
        movieDetailsId={movieDetailsId}
        signedPerson={signedPerson}
        handleLoginState={handleLoginState}
      />
      <Footer
        handleSignState={handleSignState}
        handleLoginState={handleLoginState}
      />
    </>
  );
};
