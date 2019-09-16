var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    person:
      {
        "gender": "",
        "name": {
          "title": "",
          "first": "",
          "last": ""
        },
        "location": {
          "street": "",
          "city": "",
          "state": "",
          "postcode": "",
          "coordinates": {
            "latitude": "",
            "longitude": ""
          },
          "timezone": {
            "offset": "",
            "description": ""
          }
        },
        "email": "",
        "login": {
          "uuid": "",
          "username": "",
          "password": "",
          "salt": "",
          "md5": "",
          "sha1": "",
          "sha256": ""
        },
        "dob": {
          "date": "",
          "age": null
        },
        "registered": {
          "date": "",
          "age": null
        },
        "phone": "",
        "cell": "",
        "id": {
          "name": "",
          "value": ""
        },
        "picture": {
          "large": "",
          "medium": "",
          "thumbnail": ""
        },
        "nat": ""
      }
  },

  methods: {
    fetchPatients() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json() )
      .then(json => waitingApp.person = json.results[0]);

      // Means the same at this
      // fetch('https://randomuser.me/api/')
      // .then(function(response) {return response.json()})
      // .then(function(json) {waitingApp.people = json});

    }
  },

  created() {
    this.fetchPatients()
  }
});
