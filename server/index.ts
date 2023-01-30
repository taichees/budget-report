import express, { Request, Response } from "express";
import next from "next";
 
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3002;
 
app.prepare().then(() => {
	const server = express();
 
	server.all("*", (req: Request, res: Response) => {
		return handle(req, res);
	});
	server.listen(port, (err?: any) => {
		if (err) throw err;
		console.log(
                      `> Ready on localhost:${port} - env ${process.env.NODE_ENV}`
                );
	});
});