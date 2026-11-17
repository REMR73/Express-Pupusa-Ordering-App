// @ts-check
import { module } from "@prisma/composer";
import mcpParte01Service from "./service.mjs";

export default module("mcp-parte-01", ({ provision }) => {
  provision(mcpParte01Service, { id: "mcpparte01" });
});
