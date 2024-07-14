const findTheOldest = function (people) {
  return people.reduce((oldestPerson, currPerson) => {
    let currAge = getAge(currPerson);
    let oldestAge = getAge(oldestPerson);

    return currAge > oldestAge ? currPerson : oldestPerson;
  });
};

const getAge = function (person) {
  return person.yearOfDeath
    ? person.yearOfDeath - person.yearOfBirth
    : new Date().getFullYear() - person.yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;
