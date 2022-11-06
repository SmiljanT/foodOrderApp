import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Ukusna hrana, koju vam dostavljamo gdje god pozelite</h2>
      <p>Izaberite svoje omiljeno jelo iz nase siroke ponude i 
        uzivajte u ukusnom rucku ili veceri kod kuce
      </p>
      <p>
        Sva su nasa jela pripremljena sa visoko kvalitetnim sastojcima, tacno na vrijeme, 
        i naravno od strane vrhunskih kuhara!
        
      </p>
    </section>
  );
};

export default MealsSummary;