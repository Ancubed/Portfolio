import axios from "axios";

async function sendRequest(
  body: { simpleId: string; message: string },
  url: string
) {
  try {
    let responce = await axios.post(url, body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.BOT_API_AUTH_TOKEN}`,
      },
    });
  } catch(err) {
    console.error('Ошибка при отправки запроса на TgBot: ' + err);
  }
}

const distributeMessage = async (simpleId: string, message: string) => {
  try {
    if (!simpleId || !message)
      throw new Error(
        "Сообщение не отправлено. Не переданы поля simpleId или message"
      );
    console.log(message);
    let result = await sendRequest(
      { simpleId, message },
      `${process.env.BOT_API_URI}/distribute-message`
    );
    return result;
  } catch (err) {
    console.error(err);
  }
};

export { distributeMessage };
