import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // Forçamos o id a ser uma String antes de enviar para o banco
      body: JSON.stringify({
        id: String(id),
        name,
        when
      })
    })

    alert("Agendamento realizado com sucesso")
  } catch (err) {
    alert("Não foi possível agendar, tente novamente mais tarde.")
    console.log(err)
  }
}