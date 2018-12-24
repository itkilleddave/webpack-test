const _ = require('lodash');

const data = [{
  "id": 1,
  "first_name": "Bethanne",
  "last_name": "Jackman",
  "email": "bjackman0@livejournal.com",
  "gender": "Female",
  "ip_address": "189.19.97.30"
}, {
  "id": 2,
  "first_name": "Tarah",
  "last_name": "L'Hommee",
  "email": "tlhommee1@upenn.edu",
  "gender": "Female",
  "ip_address": "209.218.90.47"
}, {
  "id": 3,
  "first_name": "Ally",
  "last_name": "Zannelli",
  "email": "azannelli2@multiply.com",
  "gender": "Female",
  "ip_address": "32.114.182.54"
}, {
  "id": 4,
  "first_name": "Rodrique",
  "last_name": "Murcott",
  "email": "rmurcott3@lycos.com",
  "gender": "Male",
  "ip_address": "255.115.108.217"
}, {
  "id": 5,
  "first_name": "Selie",
  "last_name": "Dahl",
  "email": "sdahl4@discuz.net",
  "gender": "Female",
  "ip_address": "191.245.171.57"
}];

console.log("module1 - There are "
			+
			_.filter(data, {"gender": "Female"}).length
			+
			" Females in the data.");

