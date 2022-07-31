// api/new-meetup 파일의 URL
// 이 URL에 요청(POST)이 보내지면 파일 내 작성된 함수가 실행된다.

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://12345:12345@cluster0.elyh1.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
