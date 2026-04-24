const selectedDate = document.getElementById("date")
import {schedulesDay} from "../schedules/load"

selectedDate.onchange = () => {
  schedulesDay()
}