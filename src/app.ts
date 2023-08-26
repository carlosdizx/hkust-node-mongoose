import connectMongodb from "./utils/mongodb.util";
import DishModel from "./models/dish.model";
const playWithMongodb = async () => {
  console.log("Trying play with Mongodb");

  DishModel.create({
    name: "Pizza Hawaiian",
    description: "Cheese, pineapple-topped and delicious sourdough mother",
  })

    .then((dish) => {
      console.log("Created: ", dish);
      console.log();
      return DishModel.findOne({}).exec();
    })

    .then((dish) => {
      if (dish) {
        console.log("Found: ", dish);
        return DishModel.updateOne(
          { _id: dish._id },
          {
            $set: {
              name: "Italian",
              description:
                "Cheese, peperoni, tomate paste and delicious sourdough mother",
            },
          }
        ).exec();
      }
    })

    .then((result) => {
      if (result) return DishModel.findOne({}).exec();
    })
    .then((dish) => {
      if (dish) {
        dish.comments.push({
          rating: 5,
          comment: "I'm getting a sinking feeling!",
          author: "Leonardo Di Caprio",
        });
        console.log("updated", dish);
      }
      return DishModel.deleteOne({});
    })
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
};

(async () => {
  await connectMongodb();
  await playWithMongodb();
})();
