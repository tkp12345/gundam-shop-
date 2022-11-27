import { setupWorker } from "msw";
import { handlers } from "./handers";

export const worker = setupWorker(...handlers);
