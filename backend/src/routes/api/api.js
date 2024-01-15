import express from "express";

const router = express.Router();

// import child routes
import customersRoutes from "./api-students.js";
router.use("/students", customersRoutes);

export default router;
