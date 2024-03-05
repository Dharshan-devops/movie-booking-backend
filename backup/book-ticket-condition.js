const getSeatStatus = getDetails.timeslots[0].seats
.filter(seatTypeIterate => seatTypeIterate.type === 'platinum')
.map(silverSeatRows => silverSeatRows.rows)
.flat()
.find(getrow => getrow.rowname === 'H')
.cols[0]
.seats
.find(getSeatId => getSeatId.seat_id === '2');