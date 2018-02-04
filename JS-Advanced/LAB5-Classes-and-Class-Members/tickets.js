function sortTickets(tickets, sortMethod) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status
        }
    }

    let ticketObjs = [];
    let inputTickets = [];

    for(let ticket of tickets) {
        ticket = ticket.split('|');
        ticketObjs.push(new Ticket(ticket[0], ticket[1], ticket[2]));
    }
    switch (sortMethod){
        case 'destination':
            ticketObjs = ticketObjs.sort((t1, t2) => t1.destination.localeCompare(t2.destination));
            return Array.from(ticketObjs);
        case 'price':
            ticketObjs = ticketObjs.sort((t1, t2) => t1.price - t2.price);
            return Array.from(ticketObjs);
        case 'status':
            ticketObjs = ticketObjs.sort((t1, t2) => t1.status.localeCompare(t2.status));
            return Array.from(ticketObjs);
    }
}

sortTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price'
);


