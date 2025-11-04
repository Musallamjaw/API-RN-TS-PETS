import { waiter } from ".";

const getAllPets = async () => {
  const response = await waiter.get("/pets");
  return response.data;
};

const getPetById = async (id: string) => {
  const response = await waiter.get(`/pets/${id}`);
  return response.data;
};

const createPet = async (
  name: string,
  image: string,
  type: string,
  adopted: string
) => {
  const response = await waiter.post("/pets", {
    name: name,
    image: image,
    type: type,
    adopted: adopted,
  });
  return response.data;
};

const deletePet = async (id: string) => {
  const response = await waiter.delete(`/pets/${id}`);
  return response.data;
};

export { createPet, deletePet, getAllPets, getPetById };
