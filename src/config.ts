import "dotenv";

// console.log("PORT", process.env);
console.log("PORT", process.env.PORT);

export const config = {
  port: Number(process.env.PORT),
};
