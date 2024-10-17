const readline = require('readline');

class Seats {
    seatId: number;
    isBooked: boolean;

    constructor(seatId: number, isBooked: boolean) {
        this.seatId = seatId;
        this.isBooked = isBooked;
    }
}

class Theatre {
    theatreId: number;
    theatreName: string;
    theatreCity: string;
    theatreRating: number;
    theatreMovies: string[];
    seats: Seats[];

    constructor(theatreId: number, theatreName: string, theatreCity: string, theatreRating: number, theatreMovies: string[]) {
        this.theatreId = theatreId;
        this.theatreName = theatreName;
        this.theatreCity = theatreCity;
        this.theatreRating = theatreRating;
        this.theatreMovies = theatreMovies;
        this.seats = [];
        for (let i: number = 0; i < 20; i++) {
            this.seats.push(new Seats(i + 1, false));
        }
    }

    availableSeats(): string {
        const available: Seats[] = this.seats.filter(seat => !seat.isBooked);
        if (available.length === 0) {
            return "No available seats.";
        }
        return `Available Seats: ${available.map(seat => seat.seatId).join(', ')}`;
    }

    bookSeats(numberOfSeats: number[]): string {
        for (let seatId of numberOfSeats) {
            const seat = this.seats[seatId - 1];
            if (seat.isBooked) {
                return `Seat ${seatId} is already booked.`;
            } else {
                seat.isBooked = true;
            }
        }
        return "Seats are booked.";
    }

    cancelSeats(numberOfSeats: number[]): string {
        for (let seatId of numberOfSeats) {
            const seat = this.seats[seatId - 1];
            if (!seat.isBooked) {
                return `Seat ${seatId} is not booked.`;
            } else {
                seat.isBooked = false;
            }
        }
        return "Seats are canceled.";
    }
}


const theatres: Theatre[] = [
    new Theatre(1, 'PVR', 'Bangalore', 4.5, ['KGF', 'Avatar']),
    new Theatre(2, 'INOX', 'Bangalore', 4, ['KGF', 'Spider-Man']),
    new Theatre(3, 'Cinepolis', 'Bangalore', 4.2, ['Inception', 'Interstellar']),
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayTheatres() {
    console.log("Available Theatres:");
    theatres.forEach((theatre, index) => {
        console.log(`${index + 1}. ${theatre.theatreName} - Movies: ${theatre.theatreMovies.join(', ')}`);
    });
}

function handleUserInput() {
    displayTheatres();

    rl.question('Select a theatre by number (or type "exit" to quit): ', (theatreInput) => {
        if (theatreInput.toLowerCase() === 'exit') {
            console.log('Exiting the application.');
            rl.close();
            return;
        }

        const theatreIndex = Number(theatreInput) - 1;
        const selectedTheatre = theatres[theatreIndex];
        if (!selectedTheatre) {
            console.log('Invalid selection. Please try again.');
            handleUserInput(); 
            return;
        }

        console.log(`You have selected: ${selectedTheatre.theatreName}`);
        console.log(selectedTheatre.availableSeats());

        rl.question('Would you like to book or cancel tickets? (book/cancel): ', (action) => {
            if (action === 'book') {
                rl.question('Enter the seat numbers to be booked (space-separated): ', (seatInput) => {
                    const numberOfSeats: number[] = seatInput.split(" ").map(Number);
                    console.log(selectedTheatre.bookSeats(numberOfSeats));
                    console.log(selectedTheatre.availableSeats());
                    handleUserInput(); 
                });
            } else if (action === 'cancel') {
                rl.question('Enter the seat numbers to be canceled (space-separated): ', (seatInput) => {
                    const numberOfSeats: number[] = seatInput.split(" ").map(Number);
                    console.log(selectedTheatre.cancelSeats(numberOfSeats));
                    console.log(selectedTheatre.availableSeats());
                    handleUserInput(); 
                });
            } else {
                console.log('Invalid action. Please enter "book" or "cancel".');
                handleUserInput(); 
            }
        });
    });
}

handleUserInput();
