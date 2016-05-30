var Movie = function (info) {
  this.title          = info.title;
  this.timeOfPlay     = info.timeOfPlay;
  this.maxCapacity    = info.maxCapacity;
  this.seats          = info.seats;
  this.price          = info.price;
  this.ticketSold     = {
    adult: 0,
    child: 0
  };
  this.getRevenue     = function () {
    return (this.price.adult * this.ticketSold.adult) + (this.price.child * this.ticketSold.child);
  };
  this.Ticket         = function (seatCords, seatType, price, timeOfPlay) {
    this.seat       = seatCords;
    this.seatType   = seatType;
    this.price      = price;
    this.timeOfPlay = timeOfPlay;
    this.used       = false;
    this.useTicket  = function () {
      if (this.used) {
        console.log("This ticket is already used!");
      } else {
        this.used = true;
        console.log("Welcome");
      }
    };
  };
  this.generateTicket = function (seatCords, seatType) {
    var seat = this.seats[seatCords[0]][seatCords[1]];
    if (seat === 'x') {
      console.log("seat is already taken");
    } else {
      console.log("processing");
      this.seats[seatCords[0]][seatCords[1]] = 'x';
      this.ticketSold[seatType]++;
      return new this.Ticket(seatCords, seatType, this.price[seatType], this.timeOfPlay);
    }
  };
};

var batmanInfo = {
  title: 'Batman',
  timeOfPlay: 1600,
  maxCapacity: 20,
  seats: [
    ['o','o','o','o','o'],
    ['o','o','o','o','o'],
    ['o','o','o','o','o'],
    ['o','o','o','o','o']
  ],
  price: {
    adult: 100,
    child: 80
  }
};

var batman = new Movie(batmanInfo);

console.log(batman.getRevenue());

var ticketA = batman.generateTicket([0,2], 'adult');
ticketA.useTicket();
console.log(ticketA);
var ticketB = batman.generateTicket([0,3], 'adult');
ticketB.useTicket();
ticketB.useTicket(); // second time we use the ticket
console.log(ticketB);

console.log(batman.getRevenue());
