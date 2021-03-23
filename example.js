const driverPromise = import("dbdriver");

exports.readFromDb = async (query) => {
   return (await driverPromise).read(query);
};