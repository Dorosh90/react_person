export const Person = ({ person }) => (
  <div className="App">
    <section className="Person">
      <h2 className="Person__name">My name is {`${person.name}`}</h2>

      {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}

      {person.isMarried === false && (
        <p className="Person__partner">I am not married</p>
      )}

      {person.isMarried === true && (
        <p className="Person__partner">
          {`${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`}
        </p>
      )}
    </section>
  </div>
);
