const person = {
    name: 'kodom ali',
    job: 'badam khai',
    3: 'three',
    'add-dress': 'kochu khet',
}
/** dot notation */
console.log(person.job);

/** Bracket Notation */
// console.log(person[job]); // this is wrong way
console.log(person['job']); // this is right way
console.log(person['3']);
console.log(person["add-dress"]);

/** with variable name */
const prop = 'job';
console.log(person[prop]);

/** from slider */
const variable = 'happy';
const emotion = {
    happy: 'person',
    sad: 'man'
}

/** dot : access property */
const woman = emotion.happy;
console.log(woman);

/** bracket : access property with variable */
const man = emotion[variable];
console.log(man);