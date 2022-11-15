import express, { application, Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  return console.log("dd");
});

export default router;
