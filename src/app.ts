import connectMongodb from "./utils/mongodb.util";
import DishModel from "./models/dish.model";
const playWithMongodb = async () => {
  const newDish = new DishModel({
    name: "Pizza Hawaiian",
    description: "Cheese, pineapple-topped and delicious sourdough mother",
  });
  console.log("Trying play with Mongodb");
  const dishSaved = await newDish.save();
  console.log(dishSaved);
  const dishes = await DishModel.find({}).exec();
  console.log(dishes);
  await newDish.deleteOne({});
};

(async () => {
  await connectMongodb();
  await playWithMongodb();
})();
