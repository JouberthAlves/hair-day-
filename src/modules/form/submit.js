const form = document.querySelector("form")

import dayjs from "dayjs"

import { scheduleNew} from "../../services/schedules-new.js"
import { schedulesDay } from "../schedules/load.js"

const selectedDate = document.getElementById("date")
const clientName = document.getElementById("client")

// Data Atual 
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = inputToday

selectedDate.min = inputToday

form.onsubmit = async (e) => {
  e.preventDefault()

  try {
    const name = clientName.value.trim()


    if (!name) {
      return alert("Informe o nome do cliente!")
    }

    const hourSelected = document.querySelector(".hour-selected")

    if (!hourSelected) {
      return alert("Informe a hora.")
    }

    const [hour] = hourSelected.innerHTML.split(":")


    const when = dayjs(selectedDate.value).add(hour, "hour")

    const id = new Date().getTime()


    await scheduleNew({
      id,
      name,
      when,
    })

    await schedulesDay()

    clientName.value = ""
  } catch (err) {
    alert("não foi possível realizar o agendamento")
    console.log(err)
  }
}