import axios from "axios";

async function sendRequest(
  body: { simpleId: string; message: string },
  url: string
) {
  let { data } = await axios.post(url, body, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.BOT_API_AUTH_TOKEN}`,
    },
  });
  console.log(data);

  if (data != 200)
    console.error(
      `Ошибка при отправки запроса на TgBot${
        data.message ? ` - ${data.message}.` : "."
      }`
    );

  return data && data.id;
}

const distributeMessage = async (simpleId: string, message: string) => {
  try {
    if (!simpleId || !message)
      throw new Error(
        "Сообщение не отправлено. Не переданы поля simpleId или message"
      );
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
