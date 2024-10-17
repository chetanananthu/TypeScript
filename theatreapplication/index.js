var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var readline = require('readline');
var Seats = /** @class */ (function () {
    function Seats(seatId, isBooked) {
        this.seatId = seatId;
        this.isBooked = isBooked;
    }
    return Seats;
}());
var Theatre = /** @class */ (function () {
    function Theatre(theatreId, theatreName, theatreCity, theatreRating, theatreMovies) {
        this.theatreId = theatreId;
        this.theatreName = theatreName;
        this.theatreCity = theatreCity;
        this.theatreRating = theatreRating;
        this.theatreMovies = theatreMovies;
        this.seats = [];
        for (var i = 0; i < 20; i++) {
            this.seats.push(new Seats(i + 1, false));
        }
    }
    Theatre.prototype.availableSeats = function () {
        var available = this.seats.filter(function (seat) { return !seat.isBooked; });
        if (available.length === 0) {
            return "No available seats.";
        }
        return "Available Seats: ".concat(available.map(function (seat) { return seat.seatId; }).join(', '));
    };
    Theatre.prototype.bookSeats = function (numberOfSeats) {
        for (var _i = 0, numberOfSeats_1 = numberOfSeats; _i < numberOfSeats_1.length; _i++) {
            var seatId = numberOfSeats_1[_i];
            var seat = this.seats[seatId - 1];
            if (seat.isBooked) {
                return "Seat ".concat(seatId, " is already booked.");
            }
            else {
                seat.isBooked = true;
            }
        }
        return "Seats are booked.";
    };
    Theatre.prototype.cancelSeats = function (numberOfSeats) {
        for (var _i = 0, numberOfSeats_2 = numberOfSeats; _i < numberOfSeats_2.length; _i++) {
            var seatId = numberOfSeats_2[_i];
            var seat = this.seats[seatId - 1];
            if (!seat.isBooked) {
                return "Seat ".concat(seatId, " is not booked.");
            }
            else {
                seat.isBooked = false;
            }
        }
        return "Seats are canceled.";
    };
    return Theatre;
}());
// Create an array of theatres
var theatres = [
    new Theatre(1, 'PVR', 'Bangalore', 4.5, ['KGF', 'Avatar']),
    new Theatre(2, 'INOX', 'Bangalore', 4, ['KGF', 'Spider-Man']),
    new Theatre(3, 'Cinepolis', 'Bangalore', 4.2, ['Inception', 'Interstellar']),
];
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function displayTheatres() {
    console.log("Available Theatres:");
    theatres.forEach(function (theatre, index) {
        console.log("".concat(index + 1, ". ").concat(theatre.theatreName, " - Movies: ").concat(theatre.theatreMovies.join(', ')));
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var theatreInput, theatreIndex, selectedTheatre, action, seatInput, numberOfSeats, seatInput, numberOfSeats;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 8];
                    displayTheatres();
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question('Select a theatre by number (or type "exit" to quit): ', resolve);
                        })];
                case 1:
                    theatreInput = _a.sent();
                    if (theatreInput.toLowerCase() === 'exit') {
                        console.log('Exiting the application.');
                        rl.close();
                        return [2 /*return*/];
                    }
                    theatreIndex = Number(theatreInput) - 1;
                    selectedTheatre = theatres[theatreIndex];
                    if (!selectedTheatre) {
                        console.log('Invalid selection. Please try again.');
                        return [3 /*break*/, 0]; // Loop again
                    }
                    console.log("You have selected: ".concat(selectedTheatre.theatreName));
                    console.log(selectedTheatre.availableSeats());
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question('Would you like to book or cancel tickets? (book/cancel): ', resolve);
                        })];
                case 2:
                    action = _a.sent();
                    if (!(action === 'book')) return [3 /*break*/, 4];
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question('Enter the seat numbers to be booked (space-separated): ', resolve);
                        })];
                case 3:
                    seatInput = _a.sent();
                    numberOfSeats = seatInput.split(" ").map(Number);
                    console.log(selectedTheatre.bookSeats(numberOfSeats));
                    console.log(selectedTheatre.availableSeats());
                    return [3 /*break*/, 7];
                case 4:
                    if (!(action === 'cancel')) return [3 /*break*/, 6];
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question('Enter the seat numbers to be canceled (space-separated): ', resolve);
                        })];
                case 5:
                    seatInput = _a.sent();
                    numberOfSeats = seatInput.split(" ").map(Number);
                    console.log(selectedTheatre.cancelSeats(numberOfSeats));
                    console.log(selectedTheatre.availableSeats());
                    return [3 /*break*/, 7];
                case 6:
                    console.log('Invalid action. Please enter "book" or "cancel".');
                    _a.label = 7;
                case 7: return [3 /*break*/, 0];
                case 8: return [2 /*return*/];
            }
        });
    });
}
main();
