let person={
    firstname: "JOE",
    lastname: "BIDEN",
    fullname: function()
    {
        return this.firstname+ ""+this.lastname;
    }
}
console.log(person.fullname());