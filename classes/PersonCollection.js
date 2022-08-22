export default class PersonCollection {
    constructor(propertyToSort) {
        this.persons = new Array();
        this.subscribers = new Array();
        this.propertyToSort = propertyToSort;
    }

    add(person) {
        this.persons.push(person);
        this.publish(this.add.name);
    }

    remove() {
        let removedPerson;

        const preparedPersons = this.persons
            .filter((person) => person[this.propertyToSort])
            .sort((prev, next) => prev[this.propertyToSort] - next[this.propertyToSort]);

        if (preparedPersons.length > 0) {
            removedPerson = preparedPersons.pop();
        } else {
            // if property not defined in Person - let's remove item with maximum id
            removedPerson = this.persons.pop();
        }

        this.publish(this.remove.name);
        return removedPerson;
    }

    publish(methodName) {
        let message;

        switch (methodName) {
            case "add":
                message = `Person successfuly added to collection`;
                break;
            case "remove":
                message = `Person successfuly removed from collection`;
                break;
            default:
                message = "Method not found";
                break;
        }

        console.log(message);

        // for example: subscribers, has email/url-for-push-notifications/etc property
        // this.subscribers.map((subscriber) => {
        //     this.sendEmail(subscriber.email);
        // });
    }
}
