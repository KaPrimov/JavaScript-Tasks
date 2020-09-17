class Ticket {
    constructor(
        public destination: string,
        public price: number,
        public status: string
    ) {}
}

function sortTickets(input: string[], sortCriteria: string) {
    let tickets: Ticket[] = [];
    input.forEach(data => {
        let tokens: string[] = data.split('|');
        const ticket = new Ticket(tokens[0], parseFloat(tokens[1]), tokens[2])
        tickets = tickets.concat(ticket);
    });
    tickets.sort((a, b) => {
        if (a[sortCriteria] > b[sortCriteria]) return 1;
        else if (a[sortCriteria] < b[sortCriteria]) return -1;
        return 0;
    }).forEach(e => console.log(e));
}
