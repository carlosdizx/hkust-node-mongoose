import connectMongodb from "./utils/mongodb.util";
import DishModel from "./models/dish.model";
const playWithMongodb = async () => {
  console.log("Trying play with Mongodb");

  await DishModel.create({
    name: "Pizza Hawaiian",
    description: "Cheese, pineapple-topped and delicious sourdough mother",
  });
  console.log("created", await DishModel.findOne({}));

  await DishModel.updateOne(
    {},
    {
      $set: {
        name: "Italian",
        description:
          "Cheese, peperoni, tomate paste and delicious sourdough mother",
      },
    }
  ).exec();

  console.log("updated", await DishModel.findOne({}));

  await DishModel.deleteOne({}).exec();
};

(async () => {
  await connectMongodb();
  await playWithMongodb();
})();
