import { Elysia } from "elysia";
import { route, me } from "./routes";

const app = new Elysia();

app.get("/", () => {
  return {
    hello: "world",
  };
});

app.get("/:ip", route);
app.get("/me", me);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
