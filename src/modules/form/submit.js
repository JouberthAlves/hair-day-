const form = document.querySelector("form")

import dayjs from "dayjs"

const selectedDate = document.getElementById("date")

// Data Atual 
const inputToday = dayjs( new Date()).format("YYYY-MM-DD")

selectedDate.value = inputToday

selectedDate.min = inputToday

form.onsubmit = (e) => {
  e.preventDefault()
}