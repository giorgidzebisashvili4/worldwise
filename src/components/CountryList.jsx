import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
function CountryList({ isLoading, cities }) {
  if (isLoading) {
    return <Spinner />;
  }
  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  }

  const countries = cities.reduce((arr, city) => {
    const existingCountry = arr.find((el) => el.country === city.country);
    if (!existingCountry)
      return [...arr, { country: city.country, emoji: city.emoji }];
    return arr;
  }, []);

  console.log(countries);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
