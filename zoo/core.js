const data = require("./data.js");


function entryCalculator (entrants) {
    return entrants
        ? Object.keys(entrants).reduce((acc, val) => acc+= data.prices[val] * entrants[val], 0)
        : 0;
    };


function schedule (dayName) {
    const readable = Object.keys(data.hours)
        .reduce((acc, val) => {
            acc[val] = data.hours[val].open !== 0
                ? `Open from ${data.hours[val].open}am until ${data.hours[val].close%12}pm`
                : "CLOSED"; //Yea yea I know I should've checked for am/pm
            return acc;
        }, {})
    return dayName 
        ? { [dayName] : readable[dayName] }
        : readable;
};

function animalCount (species) {
    const count = data.animals.reduce((acc, sp) => {
        acc[sp.name] = sp.residents.length;
        return acc;
    }, {});
    return species
        ? count[species]
        : count;
};

function animalMap (options) {
  // your code here
};

function animalPopularity (rating) {
  const popularity = data.animals.reduce((acc, curr) => {
    if (acc[curr.popularity]) {
        acc[curr.popularity].push(curr.name);
    } else acc[curr.popularity] = [ curr.name ];

    return acc;
  }, {});
  return rating
    ? popularity[rating]
    : popularity;
};


function animalsByIds (ids) {
    if (!ids) return [];
    if (typeof(ids) === "string") {
        return data.animals.filter((sp) => sp.id === ids);
    } else {
        return data.animals.filter((sp) => ids.indexOf(sp.id) !== -1);
    }
};

function animalByName (animalName) {
    if (!animalName) return {}

    let animal;
    data.animals.some((sp) => {
        if(!animal) {
            animal = sp.residents.find((resident) => resident.name === animalName);
        }
        if (animal) {
            animal.species = sp.name;
            return animal;
        }
    });
    return animal;
};

function employeesByIds (ids) {
    if (!ids) return [];
    if (typeof(ids) === "string") {
        return data.employees.filter((em) => em.id === ids);
    } else {
        return data.employees.filter((em) => ids.indexOf(em.id) !== -1);
    }
};

function employeeByName (employeeName) {
    if (!employeeName) return [];
    return data.employees.filter((em) => em.firstName === employeeName || em.lastName === employeeName)[0];
};

function managersForEmployee (idOrName) {   //This one don't even make sense to me :/
    if (!idOrName) return [];
    const employee = data.employees
        .filter((em) => em.firstName === idOrName || em.lastName === idOrName || em.id === idOrName)[0];
    employee.managers = employee.managers.map((manager) => {
        const manObj = employeesByIds(manager)[0];
        return `${manObj.firstName} ${manObj.lastName}`;
    });
    return employee;
};

function getFullName(idOrName) {
    const emp = data.employees.filter((em) => em.firstName === idOrName || em.lastName === idOrName || em.id === idOrName)[0];
    return `${emp.firstName} ${emp.lastName}`;
}

function employeeCoverage (idOrName) {
    const responsible = data.employees.reduce((acc, em) => {
        em.responsibleFor = animalsByIds(em.responsibleFor).map(sp => sp.name);
        const fullName = `${em.firstName} ${em.lastName}`;
        acc[fullName] = em.responsibleFor;
        return acc;
    }, {});
    return idOrName
        ? { [getFullName(idOrName)] : responsible[getFullName(idOrName)] }
        : responsible;
};

module.exports = {
  entryCalculator: entryCalculator,
  schedule: schedule,
  animalCount: animalCount,
  animalMap: animalMap,
  animalPopularity: animalPopularity,
  animalsByIds: animalsByIds,
  animalByName: animalByName,
  employeesByIds: employeesByIds,
  employeeByName: employeeByName,
  managersForEmployee: managersForEmployee,
  employeeCoverage: employeeCoverage
}