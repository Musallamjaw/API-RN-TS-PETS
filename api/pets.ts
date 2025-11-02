import { waiter } from ".";

const getAllPets = async () => {
  const response = await waiter.get("/pets");
  return response.data;
};

const getPetById = async (id: string) => {
  const response = await waiter.get(`/pets/${id}`);
  return response.data;
};

export { getAllPets, getPetById };
